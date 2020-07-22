import {LoadingIcon, SearchIcon} from "../icons";
import "./auto-complete.styl"
import {useCallback, useState} from "react";
import debounce from "lodash/debounce"

export function AutoComplete({api, displayAs, resultTitle = "Users", moreResults}) {

    const [value, setValue] = useState("");
    const [result, setResult] = useState({});
    const [loading, setLoading] = useState(false);

    const fetchData = (query) => {
        if (query.length > 0) {
            setLoading(true);
            api(query).then((result) => {
                setResult(result);
                setLoading(false);
            });
        }

    };

    const search = useCallback(debounce(query => fetchData(query), 800), []);


    return (
        <div className="auto-complete">
            <div className="input-search">
                <SearchIcon
                    width={30}
                    height={30}
                />
                <input
                    className="input-control"
                    placeholder="Who are you looking for?"
                    value={value}
                    onChange={(e) => {
                        const val = e.target.value;
                        setValue(val);

                        if (val.length > 0) {
                            search(e.target.value);
                        } else {
                            setResult({});
                        }

                    }}
                />

                { loading && (
                    <LoadingIcon
                        width={30}
                        height={30}
                    />
                )}
            </div>

            { result.total_count == 0 && (
                <div className="search-results">
                    <div className="results-wrapper">
                        <div className="result-item no-select">
                            No result found.
                        </div>
                    </div>
                </div>
            )}

            { value.length > 0 && result.items?.length > 0 && (
                <div className="search-results">
                    <div className="result-sub-title">
                        {resultTitle}
                    </div>

                    <div className="results-wrapper">
                        {result.items.map((item, index) => (
                            <div className="result-item" key={index}>
                                {displayAs(item)}

                                <div className="enter-text">
                                    Select ↵
                                </div>
                            </div>
                        ))}
                    </div>

                    { moreResults && moreResults(result)}

                </div>
            )}

        </div>
    )
}

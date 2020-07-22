import {useState} from "react";
import "./index.styl";
import {Layout} from "../components/layout/layout";
import {GithubLogo, LoadingIcon, SearchIcon} from "../components/icons";
import fetch from 'isomorphic-unfetch';
import {AutoComplete} from "../components/auto-complete/auto-complete";
import {searchApi} from "../common/api/search-api";
import {Plural} from "../common/plural";

export default function Home() {

    const [count, setCount] = useState(0);

    return (
        <Layout
            title="Home"
        >
            <div className="home-route">
                <div className="search-container">
                    <div className="logo">
                        <GithubLogo
                        />
                    </div>

                    <div className="search-wrapper">
                        <AutoComplete
                            api={(keyword) => searchApi.search(keyword)}
                            displayAs={(item) => (
                                <div className="result-item-wrapper">
                                    <img src={item.avatar_url} alt=""
                                        className="avatar"
                                    />

                                    {item.login}
                                </div>
                            )}
                            moreResults={(result) => (result.total_count - 10 > 0) && (
                                <div className="more-results">
                                    Show more ({result.total_count - 10} {Plural.noun("result", result.total_count - 10)})
                                </div>
                            )}

                        />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

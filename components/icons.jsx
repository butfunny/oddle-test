import "./icons.styl";

export const GithubLogo = ({width = 55, height = 55}) => (
    <svg className="octicon octicon-mark-github v-align-middle" height={height} viewBox="0 0 16 16" version="1.1"
         width={width}
         aria-hidden="true">
        <path fillRule="evenodd"
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
    </svg>
);

export const SearchIcon = ({width = 18, height = 18}) => (
    <svg
        className="search-icon"
        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width={width} height={height}>
        <path d="M0 0h24v24H0z" fill="none"/>
        <path
            d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
    </svg>
);

export const LoadingIcon = ({width = 18, height = 18}) => (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
         className="loading-icon"
         x="0px" y="0px"
         width={width} height={height} viewBox="0 0 50 50">
        <path fill="#bec0c9"
              d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z">
            <animateTransform attributeType="xml"
                              attributeName="transform"
                              type="rotate"
                              from="0 25 25"
                              to="360 25 25"
                              dur="0.6s"
                              repeatCount="indefinite"
            />
        </path>
    </svg>
);

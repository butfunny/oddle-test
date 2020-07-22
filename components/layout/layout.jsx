import Head from "next/head";
import "./layout.styl";


export function Layout({title, children}) {
    return (
        <div className="app-layout">
            <Head>
                <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" rel="stylesheet"/>
                <link rel="shortcut icon" href="https://github.githubassets.com/favicons/favicon-dark.png"/>
                <title>{title}</title>
            </Head>

            <div className="app-container">
                {children}
            </div>
        </div>
    )
}

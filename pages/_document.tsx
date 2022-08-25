import React from "react";
import Document, {DocumentContext, Head, Html, Main, NextScript} from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx)
        return {...initialProps}
    }

    render() {
        const homePage = process.env.NEXT_PUBLIC_HOME_PAGE
        return (
            <Html>
                <Head>
                    <meta name="description" content="Next-js structure"/>
                    <meta name="keywords" itemProp="keywords" content="nextjs structure"/>
                    <meta name="news_keywords" content="next-js structure"/>
                    <meta property="og:site_name" content="next-js structure"/>

                    <meta property="og:type" content="website"/>
                    <script dangerouslySetInnerHTML={{
                        __html: `[Your Scripts]`
                    }}/>
                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument
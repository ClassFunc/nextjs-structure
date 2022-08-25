import type {NextPage} from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import MyComponent1 from "../components/component1";

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Next-js structure by ClassFunc JSC</title>
                <meta name="description" content="Next-js structure by ClassFunc JSC"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>
                <MyComponent1/>
            </main>

            <footer className={styles.footer}>

            </footer>
        </div>
    )
}

export default Home

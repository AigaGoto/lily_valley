import Head from "next/head";
import styles from '../styles/Home.module.css'
import Header from "./header";
import Footer from './footer'

export default function Layout(props: any) {
    return (
        <div>
            <Head>
                <title>Lily Balley</title>
                <meta name="description" content="This is Lily Balley Home Page" />
                <link rel="icon" href="/favicon.ico" />  {/* 後でリリバレのアイコンに変える */}
                <script src="https://kit.fontawesome.com/aaed34192b.js" crossOrigin="anonymous"></script>
            </Head>
            <Header />
            <main>
                {props.children}
            </main>
            <Footer/>
        </div>
    )
}
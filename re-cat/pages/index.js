import Head from "next/head";
import styles from "../styles/Home.module.css";

import Gallery from "./imagegallery";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        
        <title>Alapítvány a macskákért</title>
        <meta name="Alapítvány a macskákért" content="Macska ivartalanítás" />
        <link rel="icon" href="/favicon.ico" />
      
      </Head>
      <Gallery />
    </div>
  );
}

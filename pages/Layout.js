import { useEffect } from 'react';
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Layout(props) {

  function addScript(path, callback = null) {
    let script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = path;
    if(callback !== null) {
      script.onload = callback;
    }
    document.body.appendChild(script);
  }
  
  useEffect(() => {
    
    
  },[]);


  return (
    <>
      <Head>
        <title>87LUX</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {/* HEADER */}
      <Header />
      {/* CONTENT */}
      <div className="content-area">
        {props.children}
      </div>
      {/* FOOTER*/}
      <Footer />
    </>
  );
}



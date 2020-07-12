import React from 'react';
import Link from "next/link";
import Head from 'next/head';

export default ({children, title})=>(
  <div>
    <Head>
      <title>{ title }</title>
        <meta name="viewport" content="width=device-width"/>
    </Head>
    <header>
      <Link  href="/">
      <a>{title}</a>
      </Link>
    </header>
    <div className="container">
      {children}
    </div>
    <style jsx>{`
      header {
        background: #8756ca;
        padding: 15px;
        text-align: center;
      }
      header a {
        color: #fff;
        text-decoration: none;
        font-weight: bold;
        font-size: 1.2em;
      }
      .container{
        position: relative;
        min-height: calc(100vh - calc(1.2em + 33px) );
      }
    `}</style>
    <style jsx global>{`
          *{  
            margin: 0;
            padding: 0; 
          }
          body{
            font-family: 'Lato', sans-serif, Arial;
             min-height: 100vh;
          }
        `}</style>
  </div>
)
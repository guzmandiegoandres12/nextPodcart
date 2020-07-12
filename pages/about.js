import React from 'react';
import Layout from "../components/Layout";
export default ()=>(
    <Layout title="About">
      <img src="/platzi-logo.webp" alt=""/>
      <h3>CREADO POR YO</h3>
      <h5>DIEGO ANDRES GUZMAN</h5>
      
      <style jsx>{`
        img{
          width: 250px;
          margin: 5rem auto 2rem auto ;
        }
        h3{

          text-align: center;
          font-weight: bold;
         
        }
        h5{
          text-align: center
        }
      `}</style>
    </Layout>    
  )
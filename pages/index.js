import React from 'react';

export default ()=>(
  <div>
    <img src="/platzi-logo.webp" alt=""/>
    <h1>PLATZI</h1>
  <style jsx>{`

    div{
      background-color: #1c3643;
      width: 100%;
      margin: 0;
      padding: .5rem 1rem;
      display: flex;
      align-items: center;
      justify-content: end
    }
    h1{
      margin-left: .6rem;
      color:white;
    }
    img{
      width: 40px;
    }
  `}</style>
    <style jsx global>{`
      *{  
        margin: 0;
        padding: 0; 
      }
      body{
        font-family: 'Lato', sans-serif, Arial;
      }
    `}</style>
  </div>
)
import React from 'react';

export default ()=>(
    <div>
      <img src="/platzi-logo.webp" alt=""/>
      <h3>CREADO POR YO</h3>
      <h5>DIEGO ANDRES GUZMAN</h5>
      
      <style jsx>{`
        div{
          background-color:#1c3643;
          display: flex;
          flex-direction: column;
          position: absolute;
          bottom: 0px;
          top:0;
          left: 0px;
          right:0px ;
          padding-bottom: .2rem;
          color:white;
        }
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
import React from 'react';

export default  ({image, title})=>(
  <div className="banner" style={{ backgroundImage: `url(${image})` }}> 
    <div>
      <h1>{title }</h1>
    </div>
    <style jsx>{`
    .banner {
      width: 100%;
      background-position: 50% 50%;
      background-size: cover;
      background-color: rgb(170, 170, 170);
      display: grid;
      grid-template-rows: 2fr 1fr 2fr;
      height: 50vh;
    }
    .banner div{
        background-color: #674992ec;
        grid-row: 2;
        margin-left: 5vh;
        margin-right: 5vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .banner h1{

      text-align: center;
      color: antiquewhite;
      
    }
  
    `}</style>
  </div>
    
)
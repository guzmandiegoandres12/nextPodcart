import React from 'react';
import  "isomorphic-fetch";
import Link from 'next/link'


export default  class extends React.Component{

  static async getInitialProps(){
    const req = await fetch('https://api.audioboom.com/channels/recommended')
    const { body : chanels } = await req.json()
    return {chanels};
  }
  render(){
   const {chanels} = this.props
 
    return (
      <div>
        <header>
          Podcasts
        </header>
       
      <div className="channels">
        { chanels.map((channel) => (
          <a className="channel" key={ channel.id }>
            <img src={ channel.urls.logo_image.original } alt=""/>
            <h2>{ channel.title }</h2>
          </a>
        )) }
      </div>
      <style jsx>{`
      header {
              color: #fff;
              background: #8756ca;
              padding: 15px;
              text-align: center;
            }
            .channels {
              display: grid;
              grid-gap: 15px;
              padding: 15px;
              grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
            }
            a.channel {
              display: block;
              margin-bottom: 0.5em;
              color: #333;
              text-decoration: none;
            }
            .channel img {
              border-radius: 3px;
              box-shadow: 0px 2px 6px rgba(0,0,0,0.15);
              width: 100%;
            }
            h2 {
              padding: 5px;
              font-size: 0.9em;
              font-weight: 600;
              margin: 0;
              text-align: center;
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
  }
}
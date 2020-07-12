import React from 'react';
import Link from 'next/link';
import Layout from "../components/Layout";
import ChanelGrid from "../components/ChannelGrid";

export default class extends  React.Component{
  static async getInitialProps({query}){
    const id = query.id
    const dataFetch = await fetch(`https://api.audioboom.com/audio_clips/${id}.mp3`)
    const { body : {audio_clip:data}} = await dataFetch.json()
  
    
    return {data}
    
  }

  render(){
   console.log(this.props.data);
   
    const clip = this.props.data
    return(
      <Layout title="Postcast">
      {/**<ChanelGrid chanels={chanels}/> */} 
        <div className='modal'>
          <div className='clip'>
            <picture>
              <div style={{ backgroundImage: `url(${clip.urls.image || clip.channel.urls.logo_image.original})` }} />
            </picture>
            <div className='player'>
              <h3>{ clip.title }</h3>
              <h6>{ clip.channel.title }</h6>
              <audio controls autoPlay={true}>
                <source src={clip.urls.high_mp3} type='audio/mpeg' />
              </audio>
            </div>
          </div>
        </div>
        <style jsx>{`
        .clip {
          display: flex;
          height: 100%;
          flex-direction: column;
          background: #8756ca;
          color: white;
        }
        picture {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1 1;
          flex-direction: column;
          width: auto;
          padding: 10%;
        }
        picture div {
          width: 100%;
          height: 100%;
          background-position: 50% 50%;
          background-size: contain;
          background-repeat: no-repeat;
        }
        .player {
          padding: 30px;
          background: rgba(0,0,0,0.3);
          text-align: center;
        }
        h3 {
          margin: 0;
        }
        h6 {
          margin: 0;
          margin-top: 1em;
        }
        audio {
          margin-top: 2em;
          width: 100%;
        }

        .modal {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 99999;
        }
      `}</style>
      </Layout>
   
    )
  }
}
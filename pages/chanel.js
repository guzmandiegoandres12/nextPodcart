import React ,{Fragment}from 'react';
import Layout from "../components/Layout";
import ChannelGrid from "../components/ChannelGrid";
import Banner from '../components/Banner';
import PodcastItemList from '../components/PodcastItemList';
import Error from './_error';
export default class extends React.Component{

  static async getInitialProps({query,res}){
   try {
    let idChannel = query.id

    let [reqChannel, reqSeries, reqAudios] = await Promise.all([
      fetch(`https://api.audioboom.com/channels/${idChannel}`),
      fetch(`https://api.audioboom.com/channels/${idChannel}/child_channels`),
      fetch(`https://api.audioboom.com/channels/${idChannel}/audio_clips`)
    
    ])
    if (reqChannel.status >= 400) {
      res.statusCode = reqChannel.status;
      return {channel:null, audioClips:null,series:null ,statusCode:reqChannel.status }
    
    }
    
    let dataChannel = await reqChannel.json()
    let channel = dataChannel.body.channel

    let dataAudios = await reqAudios.json()
    let audioClips = dataAudios.body.audio_clips

    let dataSeries = await reqSeries.json()
    let series = dataSeries.body.channels

   return {channel, audioClips,series ,statusCode:200}
   } catch (error) {
    res.statusCode =   503
    return {chanels: null,statusCode: 503};
   }
  }

  render(){
    const { channel, audioClips, series ,statusCode } = this.props
    console.log( audioClips);
    if(statusCode != 200){
      return <Error statusCode={statusCode} />
     }
    return(
      <Layout title="Postcast">
        <Banner title={channel.title} image={channel.urls.banner_image.original} />
        { series.length > 0 &&
          ( 
          <Fragment>
            <h2>Series</h2>
            <ChannelGrid chanels={series}/>
          </Fragment>
          )
        }

        <h2>Ultimos Podcasts</h2>
        { audioClips.map((clip) => (
          <PodcastItemList
            id={clip.id}
            title={clip.title}
            link={`/podcast?id=${clip.id}`}
          />
        ))}
        <style jsx>{`
    
          h1 {
            font-weight: 600;
            padding: 15px;
          }
          h2 {
            padding: 5px;
            font-size: 0.9em;
            font-weight: 600;
            margin: 0;
            text-align: center;
          
          }
      `}</style>
    </Layout>
    )
  }
  /**
   *   
   */
}
import React from 'react';
import  "isomorphic-fetch";
import Layout from "../components/Layout";
import ChanelGrid from "../components/ChannelGrid";
import Error from './_error';
export default  class extends React.Component{

  static async getInitialProps({res}){
   try {
    const req = await fetch('https://api.audioboom.com/channels/recommended')
    const { body : chanels } = await req.json()
    return {chanels ,statusCode:200};
   } catch (error) {
     res.statusCode =   503
     return {chanels: null,statusCode: 503};
   }
  }

  render(){
   const {chanels,statusCode} = this.props
    if(statusCode != 200){
     return <Error statusCode={statusCode} />
    }
    return (
      <Layout title="Postcast">
        <ChanelGrid chanels={chanels}/>
      </Layout>
    )
  }
}
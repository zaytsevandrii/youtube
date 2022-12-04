import React from 'react'
import './channelWindow.css'
import { Fragment } from 'react'
import VideoBox from '../Main/VideoBox'
import ChannelBox from '../Main/ChannelBox'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import {fetchFromAPI} from '../../constants/fetchFromAPI'
import { useState } from 'react'

function ChannelWindow() {

const [videos,setVideos]=useState([])
const [channelDetail,setChannel] = useState(null)
const {id} = useParams()

useEffect(() => {
  const fetchResults = async () => {
    const data = await fetchFromAPI(`channels?part=snippet&id=${id}`);

    setChannel(()=>data?.items[0]&&data?.items[0]);

    const videosData = await fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`);

    setVideos(()=>videosData?.items&&videosData?.items);
  };

  fetchResults();
}, [id]);
  return (
    <div className='channelWindow'>
      <div className='channelWindow_mainImg'><img src={channelDetail&&channelDetail.brandingSettings.image.bannerExternalUrl} alt="" /></div>
      <div className="channelWindow_main">
        <div className="channelWindow_mainBox">
          <div className="imageBox">
            <img src={channelDetail?.snippet?.thumbnails?.default?.url} alt="" />
          </div>
          <div className="channelBox">
            <div className="channelInfo">
              <p className='channel_name'>{channelDetail?.snippet?.title}</p>
              <p className='channel_sub'>{channelDetail?.statistics?.subscriberCount} subscribers</p>
            </div>
            <div className="channelBtn">
             <button type="button" className='join'>JOIN</button>
               <button type="button" className='subscribe'>SUBSCRIBE</button>          
            </div>
          </div>
        </div>
      </div>

      <div className="mainSection">
      <div className="mainSection_video">

        {videos.map((video,index) => (
          <Fragment key={index}>
          {video.id.videoId && <VideoBox video={video} />}
          {video.id.channelId &&<ChannelBox channelDetail={video} />}
          </Fragment>
        ))}

      </div>
    </div>

    </div>
  )
}

export default ChannelWindow
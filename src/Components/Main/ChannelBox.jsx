import React from 'react'
import { Link } from 'react-router-dom'
import './ChanneBox.css'

function ChannelBox({channelDetail}) {
  return (
    <div className='channel_videoBox'>
    <Link to={`/channel/${channelDetail?.id?.channelId}`} className='linkVideobox'>
    <img src={channelDetail.snippet?.thumbnails?.medium?.url} className='channel__image' alt='' />

     <div className="channel__description">
      <div className="channel__description__text">
      <p className="video-title">{channelDetail.snippet?.title}</p>
          <p className="video-author">{channelDetail.snippet?.channelTitle}</p>
      
      </div>
    </div>
    </Link>
  </div>
  )
}

export default ChannelBox
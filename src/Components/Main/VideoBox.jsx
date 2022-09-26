import React from 'react'
import { Link } from 'react-router-dom'

function VideoBox({video:{id:{videoId},snippet}}) {
  return (
  
    <div className='mainSection_videoBox'>
      <Link to={`/video/${videoId}`} className='linkVideobox'>
      <img src={snippet?.thumbnails?.medium?.url} className='video__image' alt='' />

       <div className="video__description">
        {/* <div className="video__description_image">
          <img src={channelImg} className='channel_image_img' alt="" />
        </div> */}
        <div className="video__description__text">
        <p className="video-title">
              {snippet?.title}
            </p>
            <p className="video-author">{snippet?.channelTitle}</p>
            <p className="video-stats">{snippet?.publishTime.substr(0,10)}</p>
        </div>
      </div>
      </Link>
    </div>
    

  /*   ANOTHER API----------------------------
   <div className='mainSection_videoBox'>

      <img src={video?.thumbnails[0]?.url} className='video__image' alt='' />

       <div className="video__description">
        <div className="video__description_image">
          <img src={channelImg} className='channel_image_img' alt="" />
        </div>
        <div className="video__description__text">
        <p className="video-title">
              {video?.title}
            </p>
            <p className="video-author">{video?.author?.title}</p>
            <p className="video-stats">{video?.publishedTimeText}</p>
        </div>
      </div>
      
    </div> ---------------------------------------------*/


   /* ---------------------Default 
   <div className='mainSection_videoBox'>
      <img src={image} className='video__image' alt="" />

      <div className="video__description">
        <div className="video__description_image">
          <img src={channelImg} className='channel_image_img' alt="" />
        </div>
        <div className="video__description__text">
        <p className="video-title">
              {texttitle}
            </p>
            <p className="video-author">{textauthor}</p>
            <p className="video-stats">{textstats}</p>
        </div>
      </div>
    </div> */
  )
}

export default VideoBox
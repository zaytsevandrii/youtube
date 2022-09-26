import React from "react";
import "./videoWindow.css";
import { Link } from "react-router-dom";
function VideoBoxRight({video:{id:{videoId},snippet}}) {
    return (
        <Link to={`/video/${videoId}`} className='linkVideobox'>
        <div className="videoWindow_videos">
            <div className="imgBox">
            <img src={snippet?.thumbnails?.medium?.url} className='video__image' alt='' />
            </div>
            <div className="descriptionBox">
            <div className="video__description__text">
        <p className="video-title">
              {snippet?.title}
            </p>
            <p className="video-author">{snippet?.channelTitle}</p>
            <p className="video-stats">{snippet?.publishTime.substr(0,10)}</p>
        </div>
            </div>
        </div>
        </Link>
    );
}

export default VideoBoxRight;

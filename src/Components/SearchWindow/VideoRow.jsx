import React from "react";
import "./videoRow.css";
import { Link } from "react-router-dom";

function VideoRow({video:{id:{videoId},snippet}}) {
    return (
        <Link to={`/video/${videoId}`} className='linkVideobox'>

        <div className="videoRow">
            <div className="videoRow_image">
                <img src={snippet?.thumbnails?.medium?.url} alt="" />
            </div>
            <div className="videoRow__text">
                    <p className="videoRow_title">{snippet?.title}</p>
                <p className="videoRow__headline">
                   {/*  {views} */} views • {snippet?.publishTime.substr(0,10)}
                </p>
                <div className="videoRow_channelInfo">
                    {/* <img src={channelImg} alt="" /> */}
                    <p>{snippet?.channelTitle}</p>
                </div>
                <p className="videoRow__description">{/* {description} */}</p>
            </div>
        </div>
        </Link>

    );
}

export default VideoRow;

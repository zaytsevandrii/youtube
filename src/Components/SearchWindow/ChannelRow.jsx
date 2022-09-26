import { Verified } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React from "react";
import "./ChannelRow.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchFromAPI } from "../../constants/fetchFromAPI";

function ChannelRow({video,verified,noOfVideos,description,}) {
    const [channelDetail,setChannel] = useState(null)
    useEffect(() => {
        const fetchResults = async () => {
          const data = await fetchFromAPI(`channels?part=snippet&id=${video.id.channelId}`);
      
          setChannel(()=>data?.items[0]&&data?.items[0]);
      
        };
        fetchResults();
      }, [video.id.channelId]);
    return (
        <Link to={`/channel/${video?.id?.channelId}`} className='link2'>
        <div className="channelRow">
            <div className="channelRow_left">
                <Avatar
                    className="channelRow__logo"
                    alt={channelDetail?.snippet?.title}
                    src={channelDetail?.snippet?.thumbnails?.high?.url}
                />
            </div>
            <div className="channelRow__text">
                <p className="channel_channel">
                    {channelDetail?.snippet?.title} {verified && <Verified />}
                </p>
                <p className="channel_info">
                    {channelDetail?.statistics?.subscriberCount} subscribers • {noOfVideos} videos
                </p>
                <p className="channel_description">{description}</p>
            </div>
        </div>
        <hr className="hr"/>
        </Link>
    );
}

export default ChannelRow;

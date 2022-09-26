import React, { Fragment } from "react";
import ChannelBox from "./ChannelBox";
import "./mainSection.css";
import VideoBox from "./VideoBox";
import { Route, Routes } from "react-router-dom";

const Main = ({ videos }) => {
  return (
    <div className="mainSection">
      <div className="mainSection_video">

        {videos.map((video,index) => (
          <Fragment key={index}>
          {video.id.videoId && <VideoBox video={video} />}
          {video.id.channelId &&<ChannelBox channelDetail={video} />}
          </Fragment>
        ))}




        {/* <VideoBox image='https://i.ytimg.com/vi/eUAd5f936Yg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBmbn36bI-ga26XFAoUABTWE81ZTQ'
      channelImg='https://yt3.ggpht.com/9k0N3CXvGaQj44oSDb-r63amGX2w-orEyp409sTBp0tK4WEuZTJcdhO5XzmWaschG1aCcVjWnA=s68-c-k-c0x00ffffff-no-rj'
      textstats='12M views · 1 year ago'
      textauthor='SSSniperWolf'
      texttitle='Crazy Tik Toks Taken Moments Before DISASTER'
      />
      
     */}
      </div>
    </div>
  );
};

export default Main;

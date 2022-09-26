import { TuneOutlined } from "@mui/icons-material";
import React from "react";
import "./SearchWindow.css";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";
import { useState,useEffect } from "react";
import { fetchFromAPI } from "../../constants/fetchFromAPI";
import { Fragment } from "react";
import { useParams } from "react-router-dom";

function SearchWindow() {
    const [videos, setVideos] = useState([]);
    const { searchTerm } = useParams();
      
    useEffect(() => {
      fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
        .then((data) => setVideos(data.items))
    }, [searchTerm]);
    
    return (
        <div className="searchWindow">
            <div className="searchWindow_Container">
                <div className="searchWindow_row">
                    <div className="search__row">
                        <div className="searchWindow__filter">
                            <TuneOutlined />
                            <h2>FILTERS</h2>
                        </div>

                        <hr/>
                        {videos.map((video,index) => (
                            <Fragment key={index}>
                             {video.id.videoId && <VideoRow video={video} />}
                             {video.id.channelId &&<ChannelRow video={video}/> }
                            </Fragment>
                             ))}
                        
                        {/* <ChannelRow
                            image="https://yt3.ggpht.com/ytc/AMLnZu_GS4vuibuZjr4ZBgVr97RrriUQrrhqeyWQWqMYfQ=s176-c-k-c0x00ffffff-no-rj-mo"
                            channel="Clever Programmer"
                            verified
                            subs="660K"
                            noOfVideos={382}
                            description="You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the next level"
                        />
                        <hr />
                        <VideoRow
                            views="1.4M"
                            subs="659K"
                            description="Do you want a FREE one hor training... Check yourself"
                            timestamp="59 seconds ago"
                            channel="Clever Programmer"
                            title="Let's build a Youtube Clone with REACT JS for Beginners"
                            image="https://i.ytimg.com/vi/NT299zIk2JY/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB2TNleahkp_YHx0E9frBBDhXn2lQ"
                            channelImg="https://yt3.ggpht.com/ytc/AMLnZu89hkaQk0yk4Te7idMHUTy6_n8OK6-yRlbkgr7dxQ=s68-c-k-c0x00ffffff-no-rj"
                        />
                     */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchWindow;

import React, { useEffect } from "react";
import VideoBoxRight from "./VideoBoxRight";
import "./videoWindow.css";
import { fetchFromAPI } from "../../constants/fetchFromAPI";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import ReactPlayer from "react-player";
import AppMain from '../../AppMain'

function VideoWindow() {
    const [videoDetail, setVideoDetail] = useState(null);
    const [videos, setVideos] = useState([]);
    const { id } = useParams();
  
  /*   useEffect(() => {
      fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
        .then((data) => setVideoDetail(data.items[0]))
  
      fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
        .then((data) => setVideos(data.items))

    
    }, [id]);  */

    useEffect(() => {
        const fetchResults = async () => {
          
      
          const videosData = await fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`);
          setVideos(videosData.items);

          const detail = await fetchFromAPI(`videos?part=snippet,statistics&id=${id}`);
          setVideoDetail(detail.items[0]);
        };
        
        fetchResults();
      }, [id]);

if(!videoDetail?.snippet) return 'Loading..'
const { snippet: { title, channelId, channelTitle,description,thumbnails }, statistics: { viewCount, likeCount } } = videoDetail;

    return (
        <div className="videoWindow">
            <div className="videoWindow_box">
                <div className="videoWindow_container">
                    <div className="videoWindow_video">
                        <ReactPlayer
                            url={`https://www.youtube.com/watch?v=${id}`}
                            className="react-player" playing={true} 
                            controls
                        />

                        {/*  <img src="https://www.wyzowl.com/wp-content/uploads/2018/12/The-21-Best-Video-Editing-Apps-for-Android-iPhone-and-iPad.png" alt="" /> */}
                    </div>
                    <div className="video_title">
                        <p className="title">
                            {title}
                        </p>
                        <p className="views">{parseInt(viewCount).toLocaleString()} views</p>
                    </div>
                    <Link className="link3" to={`/channel/${channelId}`}>
                    <div className="video_description">
                        <div className="image_container">
                            <img
                                src={thumbnails?.default?.url}
                                alt=""
                            /> 
                        </div>
                        <div className="description_container">
                            <div className="description_container_channel">
                                <div className="description_container_text">
                                    <p className="description_text_channel">
                                       {channelTitle}
                                    </p>
                                    <p className="description_text_subs">
                                        {" "}
                                        572K subscribers
                                    </p>
                                </div>
                                <div className="description_container_btn">
                                    <button type="button" className="subscribe">
                                        SUBSCRIBE
                                    </button>
                                </div>
                            </div>
                            <div className="description_container_description">
                                <p className="description_text">
                                    {description}
                                </p>
                            </div>
                        </div>
                    </div>
                    </Link>
                </div>

                <div className="videoWindow_videosContainer">
                    {videos.map((video, index) => (
                        <VideoBoxRight key={index} video={video} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default VideoWindow;

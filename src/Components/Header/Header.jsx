import React from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import { Mic, VideoCall } from "@mui/icons-material";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import { Avatar } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Header = ({setSelectedCategory,checkMain,setCheckMain}) => {
  const [searchText,setSearchText]=useState('')
  const navigate = useNavigate()
  const searchSubmit = (e)=>{
    e.preventDefault()
    
    if(searchText){
      navigate(`search/${searchText}`)
      setSearchText('')
      setSelectedCategory(null)
    }
  }
  
  console.log(checkMain)
  return (
    <header className="header">
      <div className="header_left">
        <div className="header_menubox">
        <MenuIcon onClick={()=>setCheckMain(!checkMain)} className="header_menu" />
        </div>
        <Link to="/youtube">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/512px-YouTube_Logo_2017.svg.png?20220605194644"
          alt="" onClick={()=>setSelectedCategory('New')}
        /></Link>
      </div>

      <form className="header_middle" onSubmit={searchSubmit}>
        <div className="header_input">
        <input type="text" placeholder="Search" value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
        </div>

        <div className="header_search" onClick={searchSubmit}>
          <SearchIcon className="search_Icon"/>
          <div className="textOpacity">Search</div>
        </div>

        <div className="header_mic">
          <Mic />
          <div className="textOpacity">Search with your voice</div>
        </div>
      </form>

      <div className="header_right">
        <div className="header_videocall">
        <VideoCall className="videocall" />
        <div className="textOpacity">Create</div>
        </div>
        <div className="header_notification">
        <i className="bi bi-bell"></i>
        <div className="textOpacity">Notifications</div>
        </div>
        <div className="header_avatar">
          <Avatar src="https://yt3.ggpht.com/2yCP1uJ3-gb1wVsqbfHQhEPDLk33DBUV-BrcNz0Bx8GGMhpzzLb4gAnw60xQcwJCfifQtPRG98Q=s88-c-k-c0x00ffffff-no-rj-mo" className="header_avatar_avatar" />
        </div>
      </div>
    </header>
  );
};

export default Header;

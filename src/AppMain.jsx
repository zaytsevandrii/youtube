import React from 'react'
import './App.css';
import Navbar from './Components/Navigation/Navbar';
import NavbarSmall from './Components/Navigation/NavbarSmall';
import { useEffect, useState } from 'react';
import { fetchFromAPI } from './constants/fetchFromAPI';
import Main from './Components/Main/Main';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import SearchWindow from './Components/SearchWindow/SearchWindow';
import VideoWindow from './Components/VideoWindow/VideoWindow';
import ChannelWindow from './Components/ChannelWindow/ChannelWindow';
import Header from './Components/Header/Header';

function AppMain() {
    const [selectedCategory, setSelectedCategory] = useState("New");
    const [videos,setVideos]= useState([])
    const [checkMain,setCheckMain] = useState(true)

    useEffect(()=>{

      fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
          .then((data) => setVideos(data.items))
    },[selectedCategory])

/* ANOTHER API---------------------
  useEffect(()=>{
      fetchFromAPI(`search/?q=${selectedCategory}&hl=en&gl=US`)
          .then((data) => setVideos(data.contents))
    },[]) 
    ---------------------------------*/

  return (
    <BrowserRouter>
    <Header setSelectedCategory={setSelectedCategory} checkMain={checkMain} setCheckMain={setCheckMain}/>
  <Routes>
    <Route path='/search/:searchTerm' element={
      <div className='app__page'>
        <Navbar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
        <NavbarSmall selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
        <SearchWindow/>
      </div>
  }/>

<Route path='/channel/:id' element={
      <div className='app__page'>
        <Navbar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} checkMain={checkMain}/>
        <NavbarSmall selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
        <ChannelWindow videos={videos}/>
      </div>
  }/>

  <Route path="/video/:id" element={
    <div className='app__page'>
      <VideoWindow videos={videos}/>
    </div>
}/>
  
  <Route path='/youtube/' element={
    <div className='app__page'>
       <Navbar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} checkMain={checkMain}/>
      <NavbarSmall selectedCategory={selectedCategory} setSelectedCategory= {setSelectedCategory}/>
      <Main videos={videos}/>
    </div>
}/>

</Routes>
</BrowserRouter>
  )
}

export default AppMain




/* <Route exact path="/" element={<AppMain />} />
<Route exact path="/video/:id" element={<VideoWindow />} />
<Route exact path="/search/:searchTerm" element={<SearchWindow />} />
<Route exact path="/channel/:id" element={<ChannelWindow />} /> */
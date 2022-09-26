import React from 'react'
import './navbarSmall.css'
import HomeIcon from "@mui/icons-material/Home";
import SearchboxSmall from './SearchboxSmall';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import { BigNavbars } from '../../constants/constans';

function NavbarSmall({selectedCategory,setSelectedCategory}) {
  return (
    <div className='navbarSmallBox'>
      <div className='navbarSmallBox_fixed'>

{BigNavbars.map(category=>(
  <SearchboxSmall category={category} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} key={category.name}/>
))}
        
       {/*  <SearchboxSmall Icon={HomeIcon} text='Home' />
        <SearchboxSmall Icon={ExploreOutlinedIcon} text='Explore'/>
        <SearchboxSmall Icon={HomeIcon} text='Shorts'/>
        <SearchboxSmall Icon={SubscriptionsOutlinedIcon} text='Subscriptions'/>
        <SearchboxSmall Icon={VideoLibraryOutlinedIcon} text='Library'/> */}
        </div>
    </div>
  )
}

export default NavbarSmall
import React, { useState } from 'react'
import './navbarBox.css'
import NavbarLink from './NavbarLink'
import HomeIcon from "@mui/icons-material/Home";
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

import { BigNavbars } from '../../constants/constans';


const Navbar = ({selectedCategory,setSelectedCategory,checkMain}) => {



  return (
    <nav className={checkMain?'navbarBox':'navbarBoxS'}>
      <div className='navbarBox__fixed' >

{/* {BigNavbars.map(category=>(
  <div className={`navbarLink ${category.name===selectedCategory && 'active'}`} onClick={()=>setSelectedCategory(category.name)} key={category.name}>
        <div className='navbarLink__icon'>{category.icon}</div>
        <div className='navbarLink__text'>{category.name}</div>
    </div>
))} */}

    {BigNavbars.map(category=>(
      <NavbarLink category={category} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} key={category.name} checkMain={checkMain}/>
    ))}

     </div>

    </nav>
  )
}

export default Navbar
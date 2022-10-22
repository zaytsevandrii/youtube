import React from 'react'
import { Link } from 'react-router-dom'

function NavbarLink({category,selectedCategory,setSelectedCategory,checkMain}) {
  
  return (
    <>
    {checkMain?
    <Link className='navbar_link' to="/youtube">
    <div className={`navbarLink ${category.to===selectedCategory && 'active'}`} onClick={()=>setSelectedCategory(category.to)}>
        <div className='navbarLink__icon'>{category.icon}</div>
        <div className='navbarLink__text'>{category.name}</div>
    </div>
    </Link>
    :
      <Link to='/youtube' className="searchbox_link">
  <div className={`searchboxSmall ${category.to===selectedCategory && 'active'}`} onClick={()=>setSelectedCategory(category.to)}>
      {category.icon}
      <div className="searchboxSmall__text">{category.name}</div>
  </div>
  </Link>}
  </>
  )
}

export default NavbarLink
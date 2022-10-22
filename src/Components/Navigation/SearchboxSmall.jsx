import React, { useState } from "react";
import { Link } from "react-router-dom";

function SearchboxSmall({ category,selectedCategory,setSelectedCategory}) {
    const [checkMain2,setCheckMain2] = useState(true)
    return (
        <>
        {checkMain2?
            <Link to='/youtube' className="searchbox_link">
        <div className={`searchboxSmall ${category.to===selectedCategory && 'active'}`} onClick={()=>setSelectedCategory(category.to)}>
            {category.icon}
            <div className="searchboxSmall__text">{category.name}</div>
        </div>
        </Link>:('1')}
        </>
        
    );
}

export default SearchboxSmall;

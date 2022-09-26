import React from "react";
import { Link } from "react-router-dom";

function SearchboxSmall({ category,selectedCategory,setSelectedCategory }) {
    return (
      <Link to='/youtube' className="searchbox_link">
        <div className={`searchboxSmall ${category.to===selectedCategory && 'active'}`} onClick={()=>setSelectedCategory(category.to)}>
            {category.icon}
            <div className="searchboxSmall__text">{category.name}</div>
        </div>
        </Link>
    );
}

export default SearchboxSmall;

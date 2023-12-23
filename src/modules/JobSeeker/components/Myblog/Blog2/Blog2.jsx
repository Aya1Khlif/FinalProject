import * as React from "react";
import './Blog2.css';


import Blog from "../../Blog/Blog";
import Search from "../../Search/Search";

const Blog2 = () => {
  return (<>
  <Blog/>
  <div className='submit'>
   <button className="ay-btn">Add Blogs</button>
   </div>
   <Search  />
   
 

  
  </>
  
  
  
    
  )
}

export default Blog2
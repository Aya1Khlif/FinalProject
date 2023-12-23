import './Button.css';
import * as React from "react";
import { Link } from "react-router-dom";

const Button = () => {
  return (
    <> 
   <Link to= '/jopseekerprofile/blog/mublog' className='ay-a'> 
   <div className='submit'>
   <button className='ay-btn'>Contenu as Bloger</button>
   </div>
   </Link>
   </>
  )
}

export default Button
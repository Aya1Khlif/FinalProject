
import './Sidebar.css'
import camera from '../../asset/imgs/camera.png'
// import { Link, NavLink } from "react-router-dom";
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom';

const Sidebar = () => {
  const [show, setshow] = useState(true);
  const [file, setFile] = useState();
  function handleChange(e) {
 
    setFile(URL.createObjectURL(e.target.files[0]));
}
  

  return (
    <>
      
         <div className='br-Sidebarss'>
    
         {/* ------------------------------------------- */}
        
        <div className="br-Asmain">
        <button onClick={() => setshow(show => !show)} className="br-Asclickbtn">
        <FontAwesomeIcon icon={faBars} className="br-Asclickicon" />
        </button>
        {show && <div className="br-show">
        <div className="br-img-top">
          <label className='lable-img'>
            <input type="file" name="name" accept=".png, .jpg, .jpeg" style={{ display: 'none' }} onChange={handleChange} />
            <img src={camera} alt="camera" className='br-img' />
            <img src={file} alt="" className="src" />
          </label>
        </div>
        {/* ----------------------------------------- */}
        <div className="br-Asname">
          <h4 className="br-Astitle">Karem Ahmed</h4>
          <p className="br-Aspargr">Web Development</p>
          <button className="br-Asbtn1">Professional advice</button>
          <hr className='br-Ashorizontal w-100' />
        </div>
        {/* ----------------------------------------- */}
        <div className="br-AsLinkss">
          <div className='br-Aslink1'>
            <NavLink to ="/jopseekerprofile/information" className= {({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
          }>INFORMATION  </NavLink>
            {/* <a className='br-Aslink11'>INFORMATION  </a> */}
          </div>

          <div className='br-Aslink1'>
            
          <NavLink  id="br-Aslink10"
           to="/jopseekerprofile/resum" 
            className= {({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
          }
         >
        RESUMS   <span className="br-AsPresent"> 0%</span>
        </NavLink> 
        {/* <a  id="br-Aslink10"
           to="/messages" 
            className= {({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
          }
         >
        RESUMS
        </a>*/}
      </div> 
        
            
         
          <div className='br-Aslink1'>
            <NavLink to ="/jopseekerprofile/blog" className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
          }>BLOGS   </NavLink>
         
          </div>
        </div>
        <hr className='br-Ashorizontal2 w-100' />
          <div className="side-bottom">
        <div className="br-Aslogout">
          <Link to="/login" className='br-Aslink13'> log out  </Link>
          {/* <a className='br-Aslink13'> log out  </a> */}
        </div>
        <div className="br-AsTerms">
          <Link className='br-Aslink14'>Terms and Conditions </Link>
          {/* <a className='br-Aslink14'>Terms and Conditions </a> */}
        </div>
        </div>
        </div>
         }
      </div>

      
      
      </div>
    </>
  )
}

export default Sidebar
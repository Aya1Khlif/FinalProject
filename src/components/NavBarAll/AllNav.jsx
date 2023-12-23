import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import NavJobSeekerLogin from './NavJobSeekerLogin'
import NavJobCompanyLogin from './NavJobCompanyLogin'
import { useLocation, useParams } from 'react-router'

export default function AllNav() {
    const[navState , SetNavState] = useState(3)
    
    const[compo , setcompo] = useState(false )
    const[compo2 , setcompo2] = useState(false )
    const[compo3 , setcompo3] = useState(false )
      const params = useParams();
      const location = useLocation(); 
        useEffect(() => {
          
        if (navState === 1  ){
            setcompo(true)
        }else setcompo(false)
        if (navState === 2){
            setcompo2(true)
        }else setcompo2(false)
        if (navState === 3){
            setcompo3(true)
        }else setcompo3(false)
          }, [compo ,compo2 , compo3  ])

    console.log(compo);
  return (
    
      
         <>
   {compo && <NavBar />}
   {compo2 && <NavJobSeekerLogin />}
   {compo3 && <NavJobCompanyLogin />}
        
   </>
    
   
  )
}

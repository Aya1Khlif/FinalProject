import './Card.css';

import victor3 from "./../../asset/imgs/Vector (2).svg"

import victor2 from "./../../asset/imgs/Vector.svg"

import React from 'react'
import { useState } from 'react';

export default function Card(props) {
  

  const [img, setimg] = useState()
  const black = ()=>{
    
  setimg(!img)
}
  
  
  return (
    <>

    {
      props.filter.map((data) => {
       
        return (
          <>
              <div className='aya-p'>
            <div className="ay-card-parent" key={data.id}>            
               <div className='ay-card-imag '><img src={data.img} /></div>
               <p className='ay-card-pragraph'>{data.paragragh}</p>  
                <div className='ay-card-parent-save'><img src={img?victor2:victor3} onClick={black}/></div>
                <div className='ay-card-profail-parent'>
                 <div className=' ay-card-profail'>                 
                  <img src={data.imgprofail}  />
                  <p>{data.username}</p>
                </div>
                <p className='ay-card-time'>{data.time} </p>
              </div>
              {data?.hachtagdata?.map((i) =>{
                return( 
                <a href="" className='ay-card-a'>{i.hachtag}</a>
                 )
              })}
            </div>
            </div>
            </>
            )
          }
        )
      }
  
   </>
  )
}
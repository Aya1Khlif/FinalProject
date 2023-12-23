import './Search.css'
import vector from './../../asset/imgs/Vector (1).svg'
import data2 from './../Card/CardaData'
import Card from '../Card/Card'
import {useState } from 'react'

const Search = () => {
  
const [filter, setfilter] = useState(data2)
 const [filterinput, setfilterinput] = useState("")



 const handelchange = ()=>{

  const filter2 = data2.filter(data => data.paragragh.toLowerCase().includes(filterinput.toLowerCase())
  ||  data.username.toLowerCase().includes(filterinput.toLowerCase())  ) 
  
 setfilter(filter2)}


 const handelaya = () => {
  const value = "posted"
 const aya =data2.filter(data =>  data.status.toLowerCase().includes(value.toLowerCase()) ) 
 setfilter(aya)
 }
 
 const handelali = () => {
  const value = "draft"
 const aya =data2.filter(data =>  data.status.toLowerCase().includes(value.toLowerCase()) ) 
 setfilter(aya)
 }
 const handenofocas = () => {
  
 setfilter(data2)
 }

  return (
   <>
   <div className='ay-parent-search'>
   <input placeholder='Search to view more' type='text' className="ay-search"
    onChange={(e) => setfilterinput(e.target.value)} onFocus={handenofocas}/>

   <img src={vector} alt="" onClick={handelchange} />
   </div>

   <div className='draft'>
    <button className='button-draft' onFocus={handelaya} >Posted Blogs</button>
    <button className='button-draft' onFocus={handelali }>Draft</button>
   </div>

   <div className="ay-componant-card">
   <Card filter={filter}/>

    </div>
  
  
   </>


  )
}

export default Search
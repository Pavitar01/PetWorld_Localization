import React from 'react'
import Apple from "../Assets/Icons/Apple.png"
import Google from "../Assets/Icons/Google.png"
import Beco from "../Assets/Icons/Beco.png"
import Amazon from "../Assets/Icons/Amazon.png"
import Walmart from "../Assets/Icons/Walmart.png"
import Nestle from "../Assets/Icons/Nestle.png"
const Brands = () => {
    const brands=[Nestle,Apple,Beco,Amazon,Google,Walmart]
  return (
    <div className='brands'>
      {
        brands.map((i)=>{
            return <img src={i} alt="Image"/>
        })
      }
    </div>
  )
}

export default Brands

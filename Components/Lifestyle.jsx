import React from 'react'
import Image from 'next/image'
import { Lifestyle_images } from '../Utiles.jsx'


function Lifestyle() {
  return (
<>
<h1 className='influencer_name_heading' data-aos="fade-down">Lifestyle</h1>
<div className='lifestyle'>
        {
Lifestyle_images.map((value,key)=>{
return(
    
    <Image src={value.img}  width={200} height={240} alt="lifestyle" key={key} style={{width:"100%"}} className={value.id == 0 ? "strech": null }></Image>
    
)
})
        }
    </div>
</>
  )
}

export default Lifestyle
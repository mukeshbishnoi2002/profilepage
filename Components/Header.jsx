import React from 'react'
import Image from 'next/image'

function Header() {
  return (
    <div className='header' >
    <div className='header-content' >
        <div className='header-content-card' style={{position:"relative"}}>
        <div style={{width:"850px", height:"900px" ,top:"-20%",left:"-20%", boxShadow:"5px 5px 5px 5px white", borderRadius:"50%",position:"absolute"}}> </div>
                   <div >
                   <div className='header-heading'>
                            <p>progress your business with</p>
                            <h2>Ronaldo</h2>
                    </div>
                    <div className='header-form'>
                        <input type="text" name="name" placeholder="name" />
                        <input type="text" name="email" placeholder="email" />
                        <button type="button">join us</button>
                    </div>
                   </div>
                  
        </div>
        <div className='header-content-card' style={{position:"relative",overflow:"hidden"}}>
           <div style={{width:"350px", height:"350px" ,top:"-10%",right:"-10%", boxShadow:"5px 5px 5px 5px white", borderRadius:"50%",position:"absolute",display:"none"}}>
                   
           </div>
           <Image src="/Images/77-778425_cristiano-ronaldo-png-juventus-transparent-png-removebg-preview.png" alt='hero-image' width={550} height={550} style={{position:"absolute",left:"50%", bottom:"0",transform:"translateX(-50%)"}}></Image>
        </div>
    </div>
    </div>
  )
}

export default Header
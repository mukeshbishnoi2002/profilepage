import Link from 'next/link'
import React from 'react'
import { Influence_growth } from '../Utiles.jsx'
import Audience from './Audience.jsx'
import Lifestyle from './Lifestyle.jsx'
import AboutMe from './AboutMe'

function Cards() {
    return (
        <div className='sidebar-with'>
            <div className='sidebar'>
                <ul>
                    <li><Link className="ss" href="#home">Home</Link></li>
                    <li><Link href="#home">Activity Status</Link></li>
                    <li><Link href="#home">Audience</Link></li>
                    <li><Link href="#home">lifestyle</Link></li>
                    <li><Link href="#home">about me</Link></li>
                    <li><Link href="#home">join us</Link></li>
                </ul>
            </div>
            <div style={{padding:"20px"}}>
                    <h4 style={{ marginTop: "10px", fontSize: "18px",fontWeight:"900" }}>Influencer Activity Status Overview</h4>
                    <div className='container'>
                    {
                        Influence_growth.map((value,key)=>{
                            return(
                                <div className='box' key={key}>
                            <p>Follower</p>
                            <p>{value.follower}M</p>
                            <p> = {value.percent}% daily usual growth</p>
                        </div>
                            )
                        })
                    }
                        <div className='box'>
                            <p>More Info...</p>
                            <p>Other</p>
                            <p>Watch Platforms</p>
                        </div>
                    </div>
 <Audience />
 <Lifestyle />
 <AboutMe />
              
            </div>
        </div>
    )
}

export default Cards
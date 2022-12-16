import React from 'react'
import Image from 'next/image'

function Audience() {

  return (
    <>
      <div>
        <h1 className='influencer_name_heading' data-aos="fade-down">Instagram + Audience</h1>
      </div>
      <div className='audience_card_second'>

        <div >
          <h4 className='instagram_audience_heading' data-aos="fade-down">INSTAGRAM AUDIENCE</h4>
          <div className='instgram_audience_inner_card' data-aos="fade-down" data-aos-delay="200" >
            <div style={{ boxShadow: "0px 0px 3px 0px", padding: "20px" }}>
              <div >
                <p className='percent'> <span className="diff_style">78%</span> &nbsp; female</p>
                <p className='percent'><span className="diff_style">25-35</span> &nbsp; years old</p>
              </div>
              <div className='influence_margin' data-aos="fade-down">
                <p className='second_percent'><span className="second_diff_style">95.5% </span> US</p>
                <p className='second_percent'><span className="second_diff_style">80.2% </span> UK</p>
                <p className='second_percent'><span className="second_diff_style">70.6% </span> CANADA</p>
              </div>
            </div>
            <div style={{ boxShadow: "0px 0px 3px 0px",marginTop: "20px" ,padding: "20px"}}>
              <h4 className='instagram_audience_heading' data-aos="fade-down" >Post Like</h4>
              <h4 data-aos="fade-down" style={{fontSize:"35px", marginTop:"10px"}}>500k</h4>

            </div>
          </div>
        </div>
        <div>

          <div>
            <h4 className='instagram_collaboration_heading' data-aos="fade-up">INSTAGRAM COLLABORATIONS</h4>
            <div className='audience_card_second_inner_card' style={{ textAlign: "center" }}>

              <div style={{ width: "300px", boxShadow: "0px 0px 3px 0px", paddingTop: "20px", paddingBottom: "20px" }}>
                <Image src="/Images/collabrate1.jpg" width={270} height={250} alt="collaborations-img1" className='instagram_collaboration_image_one' data-aos="fade-up"></Image>
                <h4 className='collaboration_name' data-aos="fade-up" data-aos-delay="100">Alika X Tempest</h4>
                <p className='collaboration_dec' data-aos="fade-up" data-aos-delay="200">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
              </div>
              <div className='audience_card_second_inner_card_two' style={{ width: "300px", boxShadow: "0px 0px 3px 0px", paddingTop: "20px", paddingBottom: "20px" }}>
                <Image src="/Images/collabrate2.jpg" width={270} height={250} alt="collaborations-img2" className='instagram_collaboration_image_two' data-aos="fade-up"></Image>
                <h4 className='collaboration_name' data-aos="fade-up" data-aos-delay="100">LUXE + COTTON</h4>
                <p className='collaboration_dec' data-aos="fade-up" data-aos-delay="200" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default Audience




{/* <div className='audience'> */ }
{/* <div className='audience_card_first'>
  <div style={{ position: "relative" }}>
    <svg width="240px" height="240px">
      <defs>
        <linearGradient id="GradientColor">
          <stop offset="0%" stop-color="#e91e63" />
          <stop offset="100%" stop-color="#673ab7" />
        </linearGradient>
      </defs>
      <circle cx="120" cy="120" r="80" stroke-linecap="round" />
    </svg>
    <p style={{ fontSize: "32px", fontWeight: "900", position: "absolute", left: "50%", top: "50%", transform: "translate(-65%,-50%)" }}>75%</p>
  </div>
</div> */}

// </div>
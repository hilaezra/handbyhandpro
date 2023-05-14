import React from 'react'

import './AboutUsPage.css'


const AboutUsPage = () => {

  return (
    <div className='page'>
      <h1 id="about-us-title">About Us</h1>
      <p className="purpose-text">The Purpose of "HAND BY HAND"
        Our organization was established out of a genuine
        need to provide a response to public entities and
        individuals who wish to contribute to the community.</p>

      <h5 className="sub-title">We provide assistance for:</h5>

      <div class="circle1">
        <p> Individuals seeking <br/> spontaneous or regular volunteering
          opportunities according to their skills and availability. </p>
      </div>

      <div class="circle2">
        <p>Public entities or <br/> private individuals in need of volunteers
          or donated goods <br/> for charity events <br/> and non-profit activities. </p>
      </div>

      <div class="circle3">
        <p> Donating or <br/> receiving furniture, clothing, and <br/> similar items.</p>
      </div>


      <h2 className="moto">Let us help you become better people for a better world</h2>

    </div>

  )
}

export default AboutUsPage
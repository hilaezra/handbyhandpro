import React from 'react'
import HomePageTabs from "./HomePageTabs"
import 'bootstrap/dist/css/bootstrap.css';
import './HomePage.css'


const HomePage = () => {

  return (
    <div class="wrapper">
      
      <div class="notification">
        <h5>notification:</h5>
        <p> invite friends to become one of our family members</p>
      </div>

      <div class="home-page-tabs">
        <HomePageTabs />
      </div>

    </div>
  )
}

export default HomePage
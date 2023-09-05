import React from 'react'
import HomePageTabs from "./HomePageTabs"
import 'bootstrap/dist/css/bootstrap.css';
import './HomePage.css'


const HomePage = () => {

  return (

    <div className="wrapper">
      
    {/* <div id="notification-position" className="notification ">
      <h5>notification:</h5>
      <p> invite friends to become one of our family members</p>
    </div> */}

    <div className="home-page-tabs">
      <HomePageTabs />
    </div>

  </div>
  
//     <div className="homepage-form">
      
//       {/* <div id="notification-position" className="notification ">
//         <h5>notification:</h5>
//         <p> invite friends to become one of our family members</p>
//       </div> */}

//       <div className="home-page-tabs centered-form">
//       <form>
//         <HomePageTabs />
//       </form>
//       </div>

//       {/*
// <div className="shelter-note side-form">
//       <form>
//       <img src='../../AppImages/shelterNote.png' />
//       </form>
//       </div>

//       <div className="yoga-note side-form">
//       <form>
//       <img src='../../AppImages/yoganote.png' />
//       </form>
//       </div>

//       */}

      

//     </div>
  )
}

export default HomePage
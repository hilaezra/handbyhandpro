import React from 'react'
import HomePageTabs from "./HomePageTabs"
import 'bootstrap/dist/css/bootstrap.css';
import './HomePage.css'


const HomePage = () => {

  return (


    // {/* <div id="notification-position" className="notification ">
    //   <h5>notification:</h5>
    //   <p> invite friends to become one of our family members</p>
    // </div> */}
    <div className='wrapper'>
      <div className="modaa shelternote">
        <img src='../../AppImages/shelterNote.png' style={{ width: '214px', height: 'auto' }}/>
      </div>
      <div className="home-page-tabs">
        <HomePageTabs />
      </div>
      <div className="modaa yoganote">
        <img src='../../AppImages/yoganote.png' style={{ width: '214px', height: 'auto' }}/>
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
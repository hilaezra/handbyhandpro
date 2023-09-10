import React, { useState, useEffect } from 'react';
import HomePageTabs from "./HomePageTabs"
import 'bootstrap/dist/css/bootstrap.css';
import './HomePage.css'
import jwtDecode from 'jwt-decode';

const HomePage = () => {

  const [randomSentence, setRandomSentence] = useState('');

  const jwtToken = localStorage.getItem('token');
  const decodedToken = jwtDecode(jwtToken);
  const currentUser = {
    firstname: decodedToken.firstname,
    lastname: decodedToken.lastname,
  }

  //array of the motos that present on the home page
  const motos = [
    "People who can do - do, people who can do even more - volunteer.",
    "A world in which people look at each other- will be a better and safer world.",
    "No one becomes poor by giving to others.",
    "Volunteering means coming out more profitable and satisfied than the needy",
    "There is nothing as satisfying as true giving from the heart.",
    "When you help someone in difficulty, you forget your own difficulties.",
    "The best way to improve your mood is to make another person smile.",
    "Any small act of giving can change such a big world.",
    "Volunteering can heal wounds that no medicine can",
    "The satisfaction you feel after doing a good thing is the best air to breathe",
    "Giving is the best medicine for the soul.",
    "Volunteering makes the world a better place"
  ];

  // Function to choose a random sentence
  const chooseRandomSentence = () => {
    const randomIndex = Math.floor(Math.random() * motos.length);
    setRandomSentence(motos[randomIndex]);
  };

  useEffect(() => {
    // init random sentence 
    chooseRandomSentence();

    // Change the sentence every 1 minutes
    const intervalId = setInterval(chooseRandomSentence, 60000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);


  return (


    // {/* <div id="notification-position" className="notification ">
    //   <h5>notification:</h5>
    //   <p> invite friends to become one of our family members</p>
    // </div> */}
    <div className='wrapper'>
      <div className="modaa shelternote">
        <div className="hello-user">Hello, {currentUser.firstname} {currentUser.lastname} </div>
        <img src='../../AppImages/shelterNote.png' style={{ width: '214px', height: '400px' }} />
      </div>
      <div className="home-page-tabs">
        <HomePageTabs />
      </div>
      <div className="modaa yoganote">
        <div className="motos">{randomSentence}</div>
        <img src='../../AppImages/yoganote.png' style={{ width: '214px', height: '350px' }} />
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
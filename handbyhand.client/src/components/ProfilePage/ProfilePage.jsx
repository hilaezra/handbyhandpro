import React from 'react'
import axios from 'axios'
import './ProfilePage.css';

const ProfilePage = async () => {

  //Get the conected user from server
  //TODO- CREATE THE REQUEST IN THE SERVER
  // const user = await axios.post("http://localhost:3000/auth/signup", { }) 

  return (
    <div className="profilepage-container">

      <div className="profilepage-form">
        <h1 id="profile-page-title">My Profile</h1>

        <form>
          <div className="about form-group">
            <h5 id="profile-page-title">About</h5>
            <label className="textfield-lab" htmlFor="firstname">First name: </label>
            {/* <label className="user-details" htmlFor="author">user.firstname</label> */}
            <label className="textfield-lab" htmlFor="firstname">Last name: </label>
            {/* <label className="user-details" htmlFor="author">user.lastname</label> */}
            <label className="textfield-lab" htmlFor="author">Birth Date: </label>
            {/* <label className="user-details" htmlFor="author">user.birthdate</label> */}
            <label className="textfield-lab" htmlFor="author">Gender: </label>
            {/* <label className="user-details" htmlFor="author">user.gender</label> */}
          </div>

          <div className="contact-info form-group">
            <h5 id="profile-page-title">Contact info</h5>
            <label className="textfield-lab" htmlFor="author">Email: </label>
            {/* <label className="user-details" htmlFor="author">user.email</label> */}
            <label className="textfield-lab" htmlFor="author">Mobile: </label>
            {/* <label className="user-details" htmlFor="author">user.mobile</label> */}
          </div>

          <div className="skills form-group">
          <h5 id="profile-page-title">Skills</h5>
          </div>

          <div className="future-events form-group">
          <h5 id="profile-page-title">Events I'm going to attend</h5>
          </div>

          <div className="past-events form-group">
          <h5 id="profile-page-title">Events I attended</h5>
          </div>

        </form>
      </div>
    </div>
  )
}

export default ProfilePage;

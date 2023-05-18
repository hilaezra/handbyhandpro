import React from 'react'
import './ProfilePage.css';

const ProfilePage = () => {

  return (
    <div className="profilepage-container">

      <div className="profilepages-form">
        <h1 id="profile-page-title">My Profile</h1>

        <form>
          <div className="about form-group">
            <h5 id="profile-page-title">About</h5>
            <label className="textfield-lab" htmlFor="firstname">First name: </label>
            {/* <label className="login-lab" htmlFor="author">user.firstמame</label> */}
            <label className="textfield-lab" htmlFor="firstname">Last name: </label>
            {/* <label className="login-lab" htmlFor="author">user.lastמame</label> */}
            <label className="textfield-lab" htmlFor="author">Birth Date: </label>
            {/* <label className="login-lab" htmlFor="author">user.birthdate</label> */}
            <label className="textfield-lab" htmlFor="author">Gender: </label>
            {/* <label className="login-lab" htmlFor="author">user.gender</label> */}
          </div>

          <div className="contact-info form-group">
            <h5 id="profile-page-title">Contact info</h5>
            <label className="textfield-lab" htmlFor="author">Email: </label>
            {/* <label className="login-lab" htmlFor="author">user.email</label> */}
            <label className="textfield-lab" htmlFor="author">Mobile: </label>
            {/* <label className="login-lab" htmlFor="author">user.mobile</label> */}
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

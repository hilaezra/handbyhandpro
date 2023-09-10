import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './ProfilePage.css';

axios.defaults.withCredentials = true

const ProfilePage = () => {
   const [user, setUser] = useState([]);

   const jwtToken = localStorage.getItem('token');
   useEffect(() => {
    axios.get(`http://localhost:3000/profile/getUser`, {headers: { Authorization: `Bearer ${jwtToken}`, }}, { withCredentials: true },)
      .then(response => {
        setUser(response.data);
      })
      .catch(error => {
        console.error('Error fetching user details:', error);
      });
  }, []);

  const userBirthdate = new Date(user.birthday).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  
  return (
    <div className="profilepage-container">

      <div className="profilepage-form">
        <h1 id="profile-page-title">My Profile</h1>

        <form>
          <div className="about form-group-profile">
            <h5 id="profile-page-title">About</h5>
            <div>
            <label className="textfield-lab" htmlFor="firstname">First name: </label>
            <label className="user-details" htmlFor="author">{user.firstname}</label>
            </div>
            <div>
            <label className="textfield-lab" htmlFor="firstname">Last name: </label>
            <label className="user-details" htmlFor="author">{user.lastname}</label>
            </div>
            <div>
            <label className="textfield-lab" htmlFor="author">Birth Date: </label>
            <label className="user-details" htmlFor="author">{userBirthdate}</label>
            </div>
            <div>
            <label className="textfield-lab" htmlFor="author">Gender: </label>
            <label className="user-details" htmlFor="author">{user.gender}</label>
          </div>
          </div>

          <div className="contact-info form-group-profile">
            <h5 id="profile-page-title">Contact info</h5>
            <div>
            <label className="textfield-lab" htmlFor="author">Email: </label>
            <label className="user-details" htmlFor="author">{user.email}</label>
            </div>
            <div>
            <label className="textfield-lab" htmlFor="author">Phone Number: </label>
            <label className="user-details" htmlFor="author">{user.phoneNumber}</label>
            </div>
            {/* <label className="textfield-lab" htmlFor="author">Mobile: </label>
            <label className="user-details" htmlFor="author">{user.mobile}</label> */}
          </div>

          <div className="skills form-group-profile">
            <h5 id="profile-page-title">About me/Skills</h5>
            <label className="user-details" htmlFor="author">{user.skills}</label>
          </div>

          {/* <div className="future-events form-group-profile">
            <h5 id="profile-page-title">Events I'm going to attend</h5>
          </div>

          <div className="past-events form-group-profile">
            <h5 id="profile-page-title">Events I attended</h5>
          </div> */}

        </form>
      </div>
    </div>
  )
}

export default ProfilePage;

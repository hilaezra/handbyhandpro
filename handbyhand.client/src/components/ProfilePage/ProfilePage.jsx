import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './ProfilePage.css';

const ProfilePage = () => {
//const [user,setUser] = useState([]);

  //Get the conected user from server
// useEffect( () => {

//   fetch('http://localhost:3000/profile/getUser')
//   .then(response => response.json())
//   .then(data => {
//       console.log(data)
//       setUser(data)
//       console.log(user)
//       console.log("Data has been recieved")
//   }).catch(err => {
//       console.log(err)
//       return alert({ error });
//   })
  
//   }, [])

// axios.get('http://localhost:3000/profile/getUser')
//   .then(response => {
//     // Handle successful response
//     setUser(response.data);
//     console.log(response.data);
//   })
//   .catch(error => {
//     // Handle error
//     console.error(error);
//   });

const user= {
  firstname:"Yuval",
  lastname: "Ohana",
  birthdate: "08/06/1998",
  gender: "female",
  email:"yuval@gmail.com",

}
  return (
    <div className="profilepage-container">

      <div className="profilepage-form">
        <h1 id="profile-page-title">My Profile</h1>

        <form>
          <div className="about form-group">
            <h5 id="profile-page-title">About</h5>
            <label className="textfield-lab" htmlFor="firstname">First name: </label>
            <label className="user-details" htmlFor="author">{user.firstname}</label>
            <label className="textfield-lab" htmlFor="firstname">Last name: </label>
            <label className="user-details" htmlFor="author">{user.lastname}</label>
            <label className="textfield-lab" htmlFor="author">Birth Date: </label>
            <label className="user-details" htmlFor="author">{user.birthdate}</label>
            <label className="textfield-lab" htmlFor="author">Gender: </label>
            <label className="user-details" htmlFor="author">{user.gender}</label>
          </div>

          <div className="contact-info form-group">
            <h5 id="profile-page-title">Contact info</h5>
            <label className="textfield-lab" htmlFor="author">Email: </label>
            <label className="user-details" htmlFor="author">{user.email}</label>
            {/* <label className="textfield-lab" htmlFor="author">Mobile: </label>
            <label className="user-details" htmlFor="author">{user.mobile}</label> */}
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

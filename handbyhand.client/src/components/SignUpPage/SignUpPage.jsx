import React from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom';

import '../LoginPage/LoginPage.css'

const SignUpPage = () => {
    const [firstname, setFirstname] = React.useState("")
    const [lastname, setLastname] = React.useState("")
    const [gender, setGender] = React.useState("")
    const [birthday, setBirthday] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [facebookuser, setFacebookuser] = React.useState("")
    const [skills, setSkills] = React.useState("")
    const [username, setUsername] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [phoneNumber, setPhoneNumber] = React.useState('');


    const handleSkillsChange = (e) => {
        console.log(e.target.value)
        setSkills(e.target.value)  
    }
    
    const handlePhoneNumberChange = (e) => {
        console.log(e.target.value)
        setPhoneNumber(e.target.value)  
    }

    const handleFirstnameChange = (e) => {
        console.log(e.target.value)
        setFirstname(e.target.value)
    }

    const handleLastnameChange = (e) => {
        console.log(e.target.value)
        setLastname(e.target.value)
    }

    const handleGenderChange = (e) => {
        console.log(e.target.value)
        setGender(e.target.value)
    }

    const handleBirthdayChange = (e) => {
        console.log(e.target.value)
        setBirthday(e.target.value)
    }

    const handleEmailChange = (e) => {
        console.log(e.target.value)
        setEmail(e.target.value)
    }

    const handleFacebookuserChange = (e) => {
        console.log(e.target.value)
        setFacebookuser(e.target.value)
    }

    const handleUsernameChange = (e) => {
        console.log(e.target.value)
        setUsername(e.target.value)
    }

    const handlePasswordChange = (e) => {
        console.log(e.target.value)
        setPassword(e.target.value)
    }

    const navigate = useNavigate();
    const handleSignUpClicked = async () => {

        try {
            const response = await axios.post("http://localhost:3000/auth/signup", {
                firstname: firstname,
                lastname: lastname,
                gender: gender,
                birthday: birthday,
                email: email,
                phoneNumber: phoneNumber,
                facebookuser: facebookuser,
                skills: skills,
                username: username,
                password: password
            }) 

            if(response.status == 200)
            navigate("/"); 
        //else //todo!  
        
        } catch (error) {
            const errorMsg = error.response.data.error
            return alert(errorMsg);
        }
        
         

    }

    return (
        <div>
            <h1 id = "sign-up-title">Sign Up</h1>
             <form className="signup-form">
            <div className="form-group">
                <label className="login-lab" htmlFor="firstname">First name: </label>
                <input className="text-field" name='firstname' value={firstname} onChange={handleFirstnameChange} />
            </div>
            <div className="form-group"> 
                <label className="login-lab" htmlFor="lastname">Last name: </label>
                <input className="text-field" name='lastname' value={lastname} onChange={handleLastnameChange} />
            </div>
            <div className="form-group">
                <label className="login-lab" htmlFor="gender">Gender: </label>
                <input className="text-field" name='gender' value={gender} onChange={handleGenderChange} />
            </div>
            <div className="form-group">
                <label className="login-lab" htmlFor="birthday">Birth day: </label>
                <input className="text-field" name='birthday' type="date" value={birthday} onChange={handleBirthdayChange} />
            </div>
            <div className="form-group">
                <label className="login-lab" type="email" htmlFor="email">Email: </label>
                <input className="text-field" name='email' value={email} onChange={handleEmailChange} />
            </div>
            <div className="form-group">
                <label className="login-lab" htmlFor="phoneNumber">Phone Number:</label>
                <input className="text-field"  type="tel" id="phoneNumber" name="phoneNumber" value={phoneNumber} onChange={handlePhoneNumberChange} />
            </div>
            <div className="form-group">
                <label className="login-lab" htmlFor="facebookuser">Facebook username: </label>
                <input className="text-field" name='facebookuser' value={facebookuser} onChange={handleFacebookuserChange} />
            </div>
            <div className="form-group">
                <label className="login-lab" htmlFor="skills">About me/Skills: </label>
                <textarea className="text-field content"name='skills' value={skills} onChange={handleSkillsChange} />
                {/* <input className="text-field" name='skills' value={skills} onChange={handleSkillsChange} /> */}
            </div>
            <div className="form-group">
                <label className="login-lab" htmlFor="username">Username: </label>
                <input className="text-field" name='username' value={username} onChange={handleUsernameChange} />
            </div>
            <div className="form-group">
                <label className="login-lab" htmlFor="password">Psassword:</label>
                <input className="text-field" name='password' type='password' value={password} onChange={handlePasswordChange} />
            </div>
            </form>
            <div>
            <button className="login-btn " onClick={handleSignUpClicked}>Sign Up</button>
            </div>
            
        </div>
    )
}

export default SignUpPage
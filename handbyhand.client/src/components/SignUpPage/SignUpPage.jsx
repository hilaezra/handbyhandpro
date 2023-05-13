import React from 'react'
import axios from 'axios'

import '../LoginPage/LoginPage.css'

const SignUpPage = () => {
    const [firstname, setFirstname] = React.useState("")
    const [lastname, setLastname] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [facebookuser, setFacebookuser] = React.useState("")
    const [username, setUsername] = React.useState("")
    const [password, setPassword] = React.useState("")

    const handleFirstnameChange = (e) => {
        console.log(e.target.value)
        setFirstname(e.target.value)
    }

    const handleLastnameChange = (e) => {
        console.log(e.target.value)
        setLastname(e.target.value)
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

    const handleSignUpClicked = async () => {
        const response = await axios.post("http://localhost:3000/auth/signup", {
            firstname: firstname,
            lastname: lastname,
            email: email,
            facebookuser: facebookuser,
            username: username,
            password: password
        })

        console.log(response.data);
    }

    return (
        <div>
            <h1 id = "sign-up-title">Sign Up</h1>
             <form className="form">
            <div>
                <label className="login-lab" htmlFor="firstname">firstname: </label>
                <input className="text-field" name='firstname' value={firstname} onChange={handleFirstnameChange} />
            </div>
            <div>
                <label className="login-lab" htmlFor="lastname">lastname: </label>
                <input className="text-field" name='lastname' value={lastname} onChange={handleLastnameChange} />
            </div>
            <div>
                <label className="login-lab" htmlFor="email">email: </label>
                <input className="text-field" name='email' value={email} onChange={handleEmailChange} />
            </div>
            <div>
                <label className="login-lab" htmlFor="facebookuser">facebookuser: </label>
                <input className="text-field" name='facebookuser' value={facebookuser} onChange={handleFacebookuserChange} />
            </div>
            <div>
                <label className="login-lab" htmlFor="username">username: </label>
                <input className="text-field" name='username' value={username} onChange={handleUsernameChange} />
            </div>
            <div>
                <label className="login-lab" htmlFor="password">password:</label>
                <input className="text-field" name='password' type='password' value={password} onChange={handlePasswordChange} />
            </div>
            </form>
            <div>
            <button class="login-btn " onClick={handleSignUpClicked}>Sign Up</button>
            </div>
            
        </div>
    )
}

export default SignUpPage
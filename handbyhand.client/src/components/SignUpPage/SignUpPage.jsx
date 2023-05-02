import React from 'react'
import axios from 'axios'

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

    //TODO
    const handleSignUpClicked = async () => {

    }

    return (
        <div>
            <div>
                <label htmlFor="firstname">firstname: </label>
                <input name='firstname' value={firstname} onChange={handleFirstnameChange} />
            </div>
            <div>
                <label htmlFor="lastname">lastname: </label>
                <input name='lastname' value={lastname} onChange={handleLastnameChange} />
            </div>
            <div>
                <label htmlFor="email">email: </label>
                <input name='email' value={email} onChange={handleEmailChange} />
            </div>
            <div>
                <label htmlFor="facebookuser">facebookuser: </label>
                <input name='facebookuser' value={facebookuser} onChange={handleFacebookuserChange} />
            </div>
            <div>
                <label htmlFor="username">username: </label>
                <input name='username' value={username} onChange={handleUsernameChange} />
            </div>
            <div>
                <label htmlFor="password">password:</label>
                <input name='password' type='password' value={password} onChange={handlePasswordChange} />
            </div>

            <div>
            <button onClick={handleSignUpClicked}>Sign Up</button>
            </div>
            
        </div>
    )
}

export default SignUpPage
import React from 'react'
import axios from 'axios'

const LoginPage = () => {
    const [username, setUsername] = React.useState("")
    const [password, setPassword] = React.useState("")

    const handleUsernameChange = (e) => {
        console.log(e.target.value)
        setUsername(e.target.value)
    }

    const handlePasswordChange = (e) => {
        console.log(e.target.value)
        setPassword(e.target.value)
    }

    const handleLoginClicked = async () => {
        const response = await axios.post("http://localhost:3000/auth/login", {
            username: username,
            password: password
        })

        console.log(response.data)
    
    }

    //TODO
    const handleSignInClicked = async () => {

    }

    //TODO
    const handleConnectWithFacebookClicked = async () => {
      
    }

    return (
        <div>
            <div>
                <label htmlFor="username">username: </label>
                <input name='username' value={username} onChange={handleUsernameChange} />
            </div>
            <div>
                <label htmlFor="password">password:</label>
                <input name='password' type='password' value={password} onChange={handlePasswordChange} />
            </div>

            <div>
            <button onClick={handleLoginClicked}>Login</button>
            </div>

            <div>
            <button onClick={handleSignInClicked}>Sign In</button>
            </div>

            <div>
            <button onClick={handleConnectWithFacebookClicked}>Connect with Facebook</button>
            </div>
            
        </div>
    )
}

export default LoginPage
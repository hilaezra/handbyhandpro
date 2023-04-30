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

            <button onClick={handleLoginClicked}>Login</button>
        </div>
    )
}

export default LoginPage
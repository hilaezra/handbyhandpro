import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

axios.defaults.withCredentials = true
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

    const handleLoginClicked = async (e) => {
        e.preventDefault()
        console.log('handleLoginClicked');
        
        try {            
            if (username && password) 
            {
                const response = await axios.post("http://localhost:3000/auth/login", {
                    username: username,
                    password: password
                })
    
                if (response.status === 200)
                {
                    console.log(response.data); /////
                    const data = response.data; /////
                    localStorage.setItem('token', data.token); /////
                    
                    navigate("/home");
                }
                else
                {
                    console.log(response.error);
                    alert("please provide user name and password")
                }
            } 
            else 
            {
                alert("please provide user name and password")
            }

        } catch (error) {
            return alert(error.message);
        }
    }

    const navigate = useNavigate();
    const handleSignUpClicked = () => {
        navigate('/signup');
    }

    //TODO
    const handleConnectWithFacebookClicked = async () => {

    }

    return (
        <div>

            <img src='../../AppImages/logo-hand-by-hand.png' />
            <h1 id="login-title">Hand By Hand</h1>
            <div className='login-text'>
                <div>
                    <label className="login-lab" htmlFor="username">Username</label>
                    <input className="text-field" name='username' value={username} onChange={handleUsernameChange} />
                </div>
                <div>
                    <label className="login-lab" htmlFor="password">Password</label>
                    <input className="text-field" name='password' type='password' value={password} onChange={handlePasswordChange} />
                </div>

                <div>
                    <button className="login-btn " type="submit" onClick={handleLoginClicked}>Login</button>
                </div>

                <span />

                <div>
                    <button className="login-btn " type="submit" onClick={handleSignUpClicked}>Sign Up</button>
                </div>

                <span />

                <div>
                    <button className="login-btn " type="submit" onClick={handleConnectWithFacebookClicked}>Connect with Facebook</button>
                </div>
            </div>
        </div>
    )
}

export default LoginPage
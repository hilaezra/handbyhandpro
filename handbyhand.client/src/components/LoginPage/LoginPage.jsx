import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';
import '../General/Alert.css'


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
        console.log('handleLoginClicked');
        try {
            const response = await axios.post("http://localhost:3000/auth/login", {
                username: username,
                password: password
            })

            console.log(response.status);
            if (response.status == 200)
                navigate("/home");

            else {
                console.log('status 400 +');
                return alert('All details are required');
            }

        } catch (error) {
            return alert('Username and password do not match');

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
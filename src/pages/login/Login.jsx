import "./login.css";
import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SensorDoorOutlined } from "@mui/icons-material";
import { Navigate } from 'react-router-dom';

export default function Login() {
    const [isLogined, setLogined] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/login', {
                email: email,
                password: password
            }, {
            }
            );
            const token = response.data.access_token;
            const id = response.data.id;
            localStorage.setItem('token', token);
            localStorage.setItem('id', id);
            setLogined(true);
        } catch (error) {
            console.error(error);
            // Обработка ошибок
        }
    };

    if (isLogined) {
        return <Navigate to="/" />;
    }

    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="logo">
                    WeSocial
                </div>
                <div className="loginFormWrapper">
                    <div className="loginForm">
                        <form onSubmit={handleSubmit}>
                            <label>
                                <div className="loginText">
                                    Email:
                                </div>
                                <input type="email" value={email} onChange={handleEmailChange} />
                            </label>

                            <br />
                            <label>
                                <div className="loginText">
                                    Password:
                                </div>
                                <input type="password" value={password} onChange={handlePasswordChange} />
                            </label>
                            <br />
                            <SensorDoorOutlined />
                            <button type="submit">Sign In</button>
                        </form>
                        <p>Don't have an account yet?</p>
                        <div className="buttonToRegister">
                            <Link className="link" to="/register">Create an account</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

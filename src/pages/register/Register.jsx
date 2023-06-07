import React, {useState} from 'react';
import axios from 'axios';
import "./register.css";
import {Navigate} from 'react-router-dom';

export default function Register() {
    const [isRegistered, setRegistered] = useState(false);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setErrorMessage('Пароли не совпадают');
            return;
        }

        try {
            const response = await axios.post('/api/register', {
                    email: email,
                    password: password,
                    username: username,
                    role: "USER"
                }, {}
            );
            setRegistered(true);
        } catch (error) {
            console.error(error);
        }
        setEmail('');
        setUsername('');
        setPassword('');
        setConfirmPassword('');
        setErrorMessage('');
    };

    if (isRegistered) {
        return <Navigate to="/login" />;
    }

    return (
        <div className="login">
            <div className='loginWrapper'>
                <div className="logo">
                    WeSocial
                </div>
                <div className="loginForm">
                    <form onSubmit={handleSubmit}>
                        <label>
                            <div className="loginText">
                                Email:
                            </div>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </label>
                        <br/>
                        <label>
                            <div className="loginText">
                                Username:
                            </div>
                            <input
                                type="text"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </label>
                        <br/>
                        <label>
                            <div className="loginText">
                                Password:
                            </div>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </label>
                        <br/>
                        <label>
                            <div className="loginText">
                                Confirm Password:
                            </div>
                            <input
                                type="password"
                                id="confirmPassword"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </label>
                        <br/>
                        {errorMessage && <div style={{color: 'red'}}>{errorMessage}</div>}
                        <button type="submit">Зарегистрироваться</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

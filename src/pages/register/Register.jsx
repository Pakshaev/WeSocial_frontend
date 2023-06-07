import React, {useState} from 'react';
import axios from 'axios';
import "./register.css";
import {Navigate} from 'react-router-dom';

export default function Register() {
    const [isRegistered, setRegistered] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setErrorMessage('Пароли не совпадают');
            return;
        }
        // Здесь вы можете добавить логику для отправки данных на сервер
        // Например, вызов API для регистрации пользователя
        try {
            const response = await axios.post('/api/register', {
                    email: username,
                    password: password,
                    role: "ROLE1"
                }, {}
            );
            console.log(response.data);
            const token = response.data.token; // Получаем токен из ответа сервера
            console.log(token);
            localStorage.setItem('token', token);
            setRegistered(true);
        } catch (error) {
            console.error(error);
            // Обработка ошибок
        }
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

import "./share.css"
import axios from 'axios';
import React, { useState } from 'react';

const Share = () => {
    const [newsText, setNewsText] = useState('');
    const token = localStorage.getItem('token');
    const handleShare = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/messages', {
                text: newsText,
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
            }
        });
        console.log('Message sent:', response.data);
        setNewsText('');
        } catch (error) {
            console.error(error);
            // Обработка ошибок
        }
    };

    const handleChange = (event) => {
        setNewsText(event.target.value);
    };

    return (
        <div className="share">
            <textarea className="inputNews" value={newsText} onChange={handleChange} />
            <button onClick={handleShare}>
                Поделиться
            </button>
        </div>
    );
};

export default Share;

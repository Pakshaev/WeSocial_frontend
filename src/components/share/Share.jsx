import "./share.css"
import React, { useState } from 'react';

const Share = () => {
    const [newsText, setNewsText] = useState('');

    const handleShare = () => {
        // Логика для обработки действия "Поделиться" с текстом новости
        // Здесь можно использовать стороннюю библиотеку или API для выполнения этой функции
        console.log('Поделиться новостью:', newsText);
    };

    const handleChange = (event) => {
        setNewsText(event.target.value);
    };

    return (
        <div className="share">
            <textarea classname="inputNews" value={newsText} onChange={handleChange} />
            <button onClick={handleShare}>
                Поделиться
            </button>
        </div>
    );
};

export default Share;

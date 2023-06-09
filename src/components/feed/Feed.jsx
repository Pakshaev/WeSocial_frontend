import Share from "../share/Share"
import Post from "../post/Post"
import "./feed.css"
import { Posts } from "../../dummyData"
import React, { useEffect, useState } from 'react';

export default function Feed() {
    const [messages, setMessages] = useState([]);
    const token = localStorage.getItem('token');
  useEffect(() => {
    // Функция для выполнения GET-запроса и получения сообщений
    const fetchMessages = async () => {
      try {
        const response = await fetch('/api/messages',{
            headers: {
            Authorization: `Bearer ${token}`,
            },
          });
        const data = await response.json();
        console.log(data);
        setMessages(data);
      } catch (error) {
        console.error('Ошибка при получении сообщений:', error);
      }
    };

    fetchMessages();
  }, []);
    return (
        <div className="feed">
            <div className="feedWrapper">
                {<Share />}
                {Posts.map((p) => (
                    <Post key={p.id} post={p} />
                ))}
            </div>
        </div>
    )
    
}

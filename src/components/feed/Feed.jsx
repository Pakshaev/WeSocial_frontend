import Share from "../share/Share"
import Post from "../post/Post"
import "./feed.css"
// import { Posts } from "../../dummyData"
import React, { useEffect, useState } from 'react';

export default function Feed() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const token = localStorage.getItem('token');
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/users', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        console.log(data);
        setUsers(data);
      } catch (error) {
        console.error('Ошибка при получении сообщений:', error);
      }
    };
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/messages', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        console.log(data);
        setPosts(data);
      } catch (error) {
        console.error('Ошибка при получении сообщений:', error);
      }
    };
    fetchPosts();
    fetchUsers();
  }, []);
    return (
        <div className="feed">
            <div className="feedWrapper">
                {<Share />}
                {posts.map((p) => (
                    <Post key={p.id} post={p} users={users} />
                ))}
            </div>
        </div>
    )
    
}

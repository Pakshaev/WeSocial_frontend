import Topbar from "../../components/topbar/Topbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Feed from "../../components/feed/Feed"
import Rightbar from "../../components/rightbar/Rightbar"
import "./home.css"
import { useEffect, useState } from 'react';
export default function Home() {
    const [users, setUsers] = useState([]);
    const token = localStorage.getItem('token');
    const id = localStorage.getItem('id');
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
        fetchUsers();
  }, []);
  const userName=(users.find(user => user.id === +id)?.name);
    return (
        <>
            <Topbar/>
            <div className="homeContainer">
                <Sidebar userName={userName}/>
                <Feed />
            </div>
        </>
    )
}
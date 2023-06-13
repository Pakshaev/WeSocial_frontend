import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from "./pages/register/Register";
import { useEffect, useState } from 'react';

function App() {
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
    <Router>
      <Routes>
        <Route exact path="/" element={<Home userName={userName}/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile userName={userName}/>} />
      </Routes>
    </Router>
  );
}

export default App;

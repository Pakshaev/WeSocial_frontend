import "./post.css"
import { FavoriteBorder } from "@mui/icons-material"
import { Users } from "../../dummyData"
import { useEffect, useState } from "react"

export default function Post({ post }) {
  const [users, setUsers] = useState([]);
  const [isLiked, setIsLiked] = useState(false);
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
    fetchUsers();
  }, []);
  const likeHandler = () => {
    setIsLiked(!isLiked);
  }
  const likeColor = isLiked ? 'red' : 'black';

  return (
    <div className="postWrapper">
      <div className="postCreatorInfo">
        <img src={Users.filter(u => u.id === post.userId)[0].profilePicture} alt="" className="postCreatorPhoto" />
        <span className="namePostCreator">
          {users.filter(u => u.id === post.userId)[0]?.name}
        </span>
      </div>

      <div className="postContentWrapper">
        <img src={post.photo} alt="" className="postPhoto" />
        <div className="postText">
          {post?.text}
        </div>
      </div>
      <FavoriteBorder className="postLike" style={{ color: likeColor }} onClick={likeHandler} />
    </div>
  )
}

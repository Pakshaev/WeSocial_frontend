import "./post.css"
import { FavoriteBorder } from "@mui/icons-material"
import { Users } from "../../dummyData"
import { useState } from "react"

export default function Post({ post }) {
  const [isLiked, setIsLiked] = useState(false);
  const likeHandler = () => {
    setIsLiked(!isLiked);
  }
  const likeColor = isLiked ? 'red' : 'black';
  return (
    <div className="postWrapper">
      <div className="postCreatorInfo">
        <img src={Users.filter(u => u.id === post.userId)[0].profilePicture} alt="" className="postCreatorPhoto" />
        <span className="namePostCreator">
          {Users.filter(u => u.id === post.userId)[0].userName}
        </span>
      </div>

      <div className="postContentWrapper">
        <img src={post.photo} alt="" className="postPhoto" />
        <div className="postText">
          {post?.text}
        </div>
      </div>
      <FavoriteBorder className="postLike" style={{color: likeColor}} onClick={likeHandler} />
    </div>
  )
}

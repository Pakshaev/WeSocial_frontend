import "./share.css"
import { PermMedia, EmojiEmotions } from "@mui/icons-material"

export default function Share() {
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img src="/assets/person/2.jpg" alt="" className="shareProfileImg" />
                    <input placeholder="Whata fuk" className="shareInput" />
                </div>
                <hr className="shareHr" />
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PermMedia className="shareIcon" />
                            <span className="shareOptionText">Photo or video</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotions className="shareIcon" />
                            <span className="shareOptionText">Feelings</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

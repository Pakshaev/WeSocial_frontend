import "./profile.css"
import Topbar from "../../components/topbar/Topbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Feed from "../../components/feed/Feed"
import Rightbar from "../../components/rightbar/Rightbar"

export default function Profile({userName}) {
    return (
        <>
            <Topbar />
            <div className="profileContainer">
                <Sidebar userName={userName}/>
                <Feed />
                <Rightbar />
            </div>
        </>
    )
}

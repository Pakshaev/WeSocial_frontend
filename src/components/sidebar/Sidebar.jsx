import "./sidebar.css"
import { Person, CottageOutlined } from "@mui/icons-material"
import { Link } from 'react-router-dom';

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarProfileWrapper">
                    <img src="/assets/person/2.jpg" alt="" className="postCreatorPhoto" />
                    <span className="nameProfile">
                        Egor Bulkin
                    </span>
                </div>
                <div className="sidebarListWrapper">
                    <ul className="sidebarList">
                        <Link className="linkSidebar" to="/">
                            <li className="sidebarListItem">
                                <CottageOutlined className="sidebarIcon" />
                                <span className="sidebarListItemText">Home</span>
                            </li>
                        </Link>

                        <Link className="linkSidebar" to="/profile">
                            <li className="sidebarListItem">
                                <Person className="sidebarIcon" />
                                <span className="sidebarListItemText">Profile</span>
                            </li>
                        </Link>

                    </ul>
                </div>
            </div>
        </div>
    )
}
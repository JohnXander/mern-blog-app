import "./settings.css"
import Sidebar from "../../components/sidebar/SideBar"
import ProfilePic from "../../images/pp5.jpg"

const Settings = () => {
    return (
        <div className="settings">
            <div className="settings-wrapper">
                <div className="settings-title">
                    <div className="settings-update-title">Update Your Account</div>
                    <div className="settings-delete-title">Delete Account</div>
                </div>
                <form className="settings-form">
                    <label>Profile Picture</label>
                    <div className="settings-pp">
                        <img src={ProfilePic} alt="Profile Pic" />
                        <label htmlFor="fileInput">
                            <i className="settings-pp-icon fa-solid fa-circle-user"></i>
                        </label>
                        <input type="file" id="fileInput" style={{display: "none"}} />
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder="John" />
                    <label>Email</label>
                    <input type="email" placeholder="john@gmail.com" />
                    <label>Password</label>
                    <input type="password" />
                    <button className="settings-submit">Update</button>
                </form>
            </div>
            <Sidebar />
        </div>
    )
}

export default Settings
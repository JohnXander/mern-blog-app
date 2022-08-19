import "./settings.css"
import Sidebar from "../../components/sidebar/SideBar"
import { useContext, useState } from "react"
import { Context } from "../../context/Context"
import { axiosInstance } from "../../config"

const Settings = () => {
    const [file, setFile] = useState(null)
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [success, setSuccess] = useState(false)
    
    const { user, dispatch } = useContext(Context)
    // const PF = "http://localhost:5000/images/"

    const handleSubmit = async (e) => {
        e.preventDefault()
        dispatch({ type: "UPDATE_START"})
        const updatedUser = {
            userId: user._id,
            username,
            email,
            password
        }
        if (file) {
            const data = new FormData()
            const filename = Date.now() + file.name
            data.append("name", filename)
            data.append("file", file)
            updatedUser.profilePic = filename
            try {
                await axiosInstance.post("/upload", data)
            } catch (err) {}
        }
        try {
            const res = await axiosInstance.put(`/users/${user._id}`, updatedUser)
            setSuccess(true)
            dispatch({ type: "UPDATE_SUCCESS", payload: res.data })
        } catch (err) {
            dispatch({ type: "UPDATE_FAILURE" })
        }
    }

    return (
        <div className="settings">
            <div className="settings-wrapper">
                <div className="settings-title">
                    <div className="settings-update-title">Update Your Account</div>
                    <div className="settings-delete-title">Delete Account</div>
                </div>
                <form className="settings-form" onSubmit={handleSubmit}>
                    <label>Profile Picture</label>
                    <div className="settings-pp">
                        <img
                            src={file ? URL.createObjectURL(file) : user.profilePic}
                            alt="Profile Pic"
                        />
                        <label htmlFor="fileInput">
                            <i className="settings-pp-icon fa-solid fa-circle-user"></i>
                        </label>
                        <input
                            type="file"
                            id="fileInput"
                            style={{ display: "none" }}
                            onChange={(e) => setFile(e.target.files[0])}
                        />
                    </div>
                    <label>Username</label>
                    <input
                        type="text"
                        placeholder={user.username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <label>Email</label>
                    <input
                        type="email"
                        placeholder={user.email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label>Password</label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)}  />
                    <button className="settings-submit" type="submit">Update</button>
                    {success &&
                        <span
                            style={{
                                color: "green",
                                textAlign: "center",
                                marginTop: "20px"
                            }}
                        >
                            Profile has been updated...
                        </span>
                    }
                </form>
            </div>
            <Sidebar />
        </div>
    )
}

export default Settings
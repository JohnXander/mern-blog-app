import "./login.css"
import { Link } from "react-router-dom"

const Login = () => {
    return (
        <div className="login">
            <span className="login-title">Login</span>
            <form className="login-form">
                <label>Email</label>
                <input className="login-input" type="text" placeholder="Enter your email..." />
                <label>Password</label>
                <input className="login-input" type="password" placeholder="Enter your password..." />
                <button className="login-button">Login</button>
            </form>
            <button className="login-register-button">
                <Link className="link" to="/register">Register</Link>
            </button>
        </div>
    )
}

export default Login
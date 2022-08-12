import "./header.css"
import viewImg from "../../images/view.avif"

const Header = () => {
    return (
        <div className="header">
            <div className="header-titles">
                <span className="header-title-sm">React & Node</span>
                <span className="header-title-lg">Blog</span>
            </div>
            <img className="header-img" src={viewImg} alt="Turkey" />
        </div>
    )
}

export default Header
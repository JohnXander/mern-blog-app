import "./sidebar.css"
import profilePic from "../../images/pp5.jpg"

const SideBar = () => {
  return (
      <div className="sidebar">
          <div className="sidebar-item">
              <span className="sidebar-title">ABOUT ME</span>
              <img src={profilePic} alt="" />
              <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi repudiandae, eos eum voluptatibus aliquid,
                  omnis aperiam.
              </p>
          </div>
          <div className="sidebar-item">
              <span className="sidebar-title">CATEGORIES</span>
              <ul className="sidebar-list">
                  <li className="sidebar-list-item">Life</li>
                  <li className="sidebar-list-item">Music</li>
                  <li className="sidebar-list-item">Style</li>
                  <li className="sidebar-list-item">Sport</li>
                  <li className="sidebar-list-item">Cinema</li>
                  <li className="sidebar-list-item">Tech</li>
              </ul>
          </div>
          <div className="sidebar-item">
              <span className="sidebar-title">FOLLOW US</span>
              <div className="sidebar-social">
                <i className="sidebar-icon fa-brands fa-square-facebook"></i>
                <i className="sidebar-icon fa-brands fa-square-twitter"></i>
                <i className="sidebar-icon fa-brands fa-square-pinterest"></i>
                <i className="sidebar-icon fa-brands fa-square-instagram"></i>
              </div>
          </div>
      </div>
  )
}

export default SideBar
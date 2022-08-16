import "./sidebar.css"
import profilePic from "../../images/pp5.jpg"
import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

const SideBar = () => {
    const [cats, setCats] = useState([])

    useEffect(() => {
        const getCats = async () => {
            const res = await axios.get("/categories")
            setCats(res.data)
        }
        getCats()
    }, [])
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
                  {cats.map(c => {
                      return <Link to={`/?cat=${c.name}`} className="link">
                          <li key={c._id} className="sidebar-list-item">{c.name}</li>
                      </Link>
                  })}
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
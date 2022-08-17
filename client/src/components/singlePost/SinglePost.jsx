import "./singlePost.css"
import { Link, useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"

const SinglePost = () => {
    const location = useLocation()
    const path = location.pathname.split("/")[2]
    const [post, setPost] = useState({})
    const PF = "http://localhost:5000/images/"

    useEffect(() => {
        const fetchPost = async () => {
            const res = await axios.get(`/posts/${path}`)
            setPost(res.data)
        }
        fetchPost()
    }, [path])

    return (
        <div className="single-post">
            <div className="single-post-wrapper">
                {post.photo && (
                    <img
                    src={PF + post.photo}
                    alt=""
                    className="single-post-img"
                />
                )}
                <h1 className="single-post-title">
                    {post.title}
                    <div className="single-post-edit">
                        <i className="single-post-icon fa-solid fa-pen-to-square"></i>
                        <i className="single-post-icon fa-solid fa-trash-can"></i>
                    </div>
                </h1>
                <div className="single-post-info">
                    <span className="single-post-author">
                        Author:
                        <Link to={`/?user=${post.username}`} className="link">
                            <b>{post.username}</b>  
                        </Link>
                    </span>
                    <span className="single-post-date">
                        {new Date(post.createdAt).toDateString()}
                    </span>
                </div>
                <p className="single-post-desc">{post.desc}</p>
            </div>
        </div>
    )
}

export default SinglePost
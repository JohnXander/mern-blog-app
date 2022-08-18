import "./singlePost.css"
import { Link, useLocation } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import axios from "axios"
import { Context } from "../../context/Context"

const SinglePost = () => {
    const location = useLocation()
    const path = location.pathname.split("/")[2]
    const [post, setPost] = useState({})
    const PF = "http://localhost:5000/images/"
    const { user } = useContext(Context)

    useEffect(() => {
        const fetchPost = async () => {
            const res = await axios.get(`/posts/${path}`)
            setPost(res.data)
        }
        fetchPost()
    }, [path])

    const handleDelete = async () => {
        try {
            await axios.delete(`/posts/${post._id}`, {
                data: { username: user.username }
            })
            window.location.replace("/")
        } catch (err) {}
    }

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
                    {post.username === user?.username && (
                        <div className="single-post-edit">
                            <i className="single-post-icon fa-solid fa-pen-to-square"></i>
                            <i
                                className="single-post-icon fa-solid fa-trash-can"
                                onClick={handleDelete}
                            ></i>
                        </div>
                    )}
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
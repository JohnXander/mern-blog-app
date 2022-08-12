import "./post.css"
import snowImg from "../../images/snow.avif"

const Post = () => {
    return (
        <div className="post">
            <img
                className="post-img"
                src={snowImg}
                alt="Snow"
            />
            <div className="post-info">
                <div className="post-cats">
                    <span className="post-cat">Music</span>
                    <span className="post-cat">Life</span>
                </div>
                <span className="post-title">
                    Lorem ipsum dolor sit amet.
                </span>
                <hr />
                <span className="post-date">1 hour ago</span>
            </div>
            <p className="post-desc">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quidem molestias amet ut obcaecati repudiandae, magnam
                hic architecto ratione sint accusamus aperiam soluta
                enim. Odio repudiandae modi labore eligendi animi nam?
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quidem molestias amet ut obcaecati repudiandae, magnam
                hic architecto ratione sint accusamus aperiam soluta
                enim. Odio repudiandae modi labore eligendi animi nam?
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quidem molestias amet ut obcaecati repudiandae, magnam
                hic architecto ratione sint accusamus aperiam soluta
                enim. Odio repudiandae modi labore eligendi animi nam?
            </p>
        </div>
    )
}

export default Post
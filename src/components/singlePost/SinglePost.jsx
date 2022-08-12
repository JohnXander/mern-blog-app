import "./singlePost.css"
import snowImg from "../../images/snow.avif"

const SinglePost = () => {
    return (
        <div className="single-post">
            <div className="single-post-wrapper">
                <img
                    src={snowImg}
                    alt=""
                    className="single-post-img"
                />
                <h1 className="single-post-title">
                    Lorem ipsum dolor sit amet
                    <div className="single-post-edit">
                        <i className="single-post-icon fa-solid fa-pen-to-square"></i>
                        <i className="single-post-icon fa-solid fa-trash-can"></i>
                    </div>
                </h1>
                <div className="single-post-info">
                    <span className="single-post-author">
                        Author: <b>John Xander</b>
                    </span>
                    <span className="single-post-date">1 hour ago</span>
                </div>
                <p className="single-post-desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Dolor suscipit natus eos repudiandae possimus!
                    Officiis, omnis aut perferendis saepe, cumque
                    molestiae necessitatibus nam id labore impedit sit
                    voluptatum hic laudantium.
                    Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Dolor suscipit natus eos repudiandae possimus!
                    Officiis, omnis aut perferendis saepe, cumque
                    molestiae necessitatibus nam id labore impedit sit
                    voluptatum hic laudantium.
                    Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Dolor suscipit natus eos repudiandae possimus!
                    Officiis, omnis aut perferendis saepe, cumque
                    molestiae necessitatibus nam id labore impedit sit
                    voluptatum hic laudantium.
                    Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Dolor suscipit natus eos repudiandae possimus!
                    Officiis, omnis aut perferendis saepe, cumque
                    molestiae necessitatibus nam id labore impedit sit
                    voluptatum hic laudantium.
                    Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Dolor suscipit natus eos repudiandae possimus!
                    Officiis, omnis aut perferendis saepe, cumque
                    molestiae necessitatibus nam id labore impedit sit
                    voluptatum hic laudantium.
                    Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Dolor suscipit natus eos repudiandae possimus!
                    Officiis, omnis aut perferendis saepe, cumque
                    molestiae necessitatibus nam id labore impedit sit
                    voluptatum hic laudantium.
                </p>
            </div>
        </div>
    )
}

export default SinglePost
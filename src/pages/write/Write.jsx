import "./write.css"
import snowImg from "../../components/images/snow.avif"

const Write = () => {
    return (
        <div className="write">
            <img className="write-img" src={snowImg} alt="Snow pic" />
            <form className="write-form">
                <div className="write-form-group">
                    <label htmlFor="fileInput">
                        <i className="write-icon fa-solid fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" style={{ display: "none" }} />
                    <input
                        type="text"
                        placeholder="Title"
                        className="write-input"
                        autoFocus={true}
                    />
                </div>
                <div className="write-form-group">
                    <textarea
                        placeholder="Tell your story..."
                        type="text"
                        className="write-input write-text"
                    ></textarea>
                </div>
                <button className="write-submit">Publish</button>
            </form>
        </div>
    )
}

export default Write
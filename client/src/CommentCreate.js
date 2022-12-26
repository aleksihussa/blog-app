import React , {useEffect, useState}from "react";
import axios from "axios";


const CommentCreate = ({postId}) =>{

    const [content, setContent] = useState('');

    const onSubmit = (event) =>{
        event.preventDefault();

        axios.post(`http://localhost:4001/posts/${postId}/comments`,{
            content
        }).then(
            setContent('')
        )
    }
    
    return <div className="form-group">
        <form onSubmit={onSubmit}>
            <div>
                <label>Create comment</label>
                <input className="form-control"
                value={content}
                onChange={e => setContent(e.target.value)}
                />
            </div>
            <button className="btn btn-primary">Submit</button>
        </form>
    
    </div>;
}

export default CommentCreate;
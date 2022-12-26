import React , {useEffect, useState}from "react";
import axios from "axios";
import CommentCreate from "./CommentCreate";
import CommentList from "./CommentList";


const PostList = () =>{
    const [posts, setPosts] = useState({});

    const getPosts =  () => {
        axios.get('http://localhost:4000/posts')
        .then((res)=>{
            setPosts(res.data);
        })
    }

    useEffect(()=>{
        getPosts();
    },[])

    const renderedPosts = Object.values(posts).map(post =>{
        return(
            <div className="card"
            style={{width: '40%',marginBottom: '20px'}}
            key= {post.id}>
                <div className="card-body">
                    <h3>{post.title}</h3>
                    <CommentList postId={post.id}/>
                    <CommentCreate postId={post.id} />

                </div>
               
            </div>
        )
    })
    return <div className="d-flex flex-row flex-wrap justify-content-between">
        {renderedPosts}
    </div>;
}

export default PostList;
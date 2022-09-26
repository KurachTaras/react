import {useEffect} from 'react';
import {useState} from "react";
import {useLocation} from "react-router-dom";
import {getPostOfComment} from "../services";
import './Comment.css'

const PostOfComments = () => {
    let {state: comment} = useLocation();
    let [post, setPost] = useState({})

    useEffect(() => {
        getPostOfComment(comment.postId).then(value => setPost({...value}));
    }, [comment.postId])


    return (
        <div className={'post_card'}>
            <div className={'info'}>
                <span className={'post_id'}>{post.id}</span> - {post.title}
            </div>
        </div>
    );
};

export default PostOfComments;
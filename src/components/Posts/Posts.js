import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getPosts} from "../../services";
import {LOAD_POSTS} from "../../reducers";
import {Post} from "../Post/Post";

const Posts = () => {

    let state = useSelector(state => state);

    let dispatch = useDispatch();

    useEffect(() => {
        getPosts().then(value => {
            dispatch({type: LOAD_POSTS, payload: value});
        })
    }, [])

    return (
        <div>
            {
                state.postsReducer.posts.map((post, index) => (<Post post={post} key={index} />))
            }
        </div>
    );
};

export {Posts};
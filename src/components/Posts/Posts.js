import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {postActions} from "../../redux";
import {Post} from "../Post/Post";

const Posts = () => {

    const dispatch = useDispatch();
    const {posts, error, loading} = useSelector(state => state.postReducer);

    useEffect(()=> {
        dispatch(postActions.getAll())
    }, [])

    return (
        <div>
            {loading&&<h1>Loading...............</h1>}
            {error&&<h1>Error</h1>}
            {posts.map(post => <Post post={post} key={post.id}/>)}
        </div>
    );
};

export {Posts};
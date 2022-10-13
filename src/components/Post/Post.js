import React from 'react';
import {useDispatch} from "react-redux";

import {postActions} from "../../redux";

const Post = ({post}) => {

    const dispatch = useDispatch();
    const {id, title, body} = post;

    return (
        <div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <div>body: {body}</div>
            <button onClick={()=> dispatch(postActions.deleteById(id))}>delete</button>
        </div>
    );
};

export {Post};
import React from 'react';

const PostOfComment = (props) => {
    let {item: post} = props;

    return (
        <div>
            <div> {post.id} - {post.title} </div>
        </div>
    );
};

export default PostOfComment;
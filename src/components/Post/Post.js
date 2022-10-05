import React from 'react';

const Post = ({post}) => {
    return (
        <div>
            <div>
                {post.id} - {post.title}
            </div>
        </div>
    );
};

export {Post};
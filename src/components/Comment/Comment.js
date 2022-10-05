import React from 'react';

const Comment = ({comment}) => {
    return (
        <div>
            <div>
                {comment.id} - {comment.name}
            </div>
        </div>
    );
};

export {Comment};
import React from 'react';

const User = ({user}) => {
    return (
        <div>
            <div>
                {user.id} - {user.name}
            </div>
        </div>
    );
};

export {User};
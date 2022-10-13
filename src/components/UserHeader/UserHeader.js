import React from 'react';
import {useSelector} from "react-redux";

const UserHeader = () => {

    const {currentUser} = useSelector(state => state.userReducer);

    return (
        <div>
            {currentUser&&currentUser.name}
        </div>
    );
};

export {UserHeader};
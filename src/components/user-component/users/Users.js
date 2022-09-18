import React, {useEffect, useState} from 'react';
import {getUserPosts, getUsers} from "../../../services/user.api.axios";
import User from "./User";
import UserPosts from "./UserPosts";
import './User.css'

function Users() {
    let [users, setUsers] = useState([]);
    let [userPosts, setUserPosts] = useState([]);

    const postsOfUser = (id) => {
        getUserPosts(id).then(value => setUserPosts(value.data));
        console.log(getUserPosts(id).then(value => value.data));
    }

    useEffect(() => {
        getUsers().then(value => setUsers(value.data))
        console.log(getUsers().then(value => value.data));
    }, []);

    return (
        <div className="users">
            <div className="users_posts">
                <hr/>
                <div>
                    {userPosts.map((post, index) => (<UserPosts item={post} key={index} />))}
                </div>
                <hr/>
            </div>
            {users.map((user, index) => (<User item={user} key={index} postsOfUser={postsOfUser} />))}
        </div>
    );
}

export default Users;
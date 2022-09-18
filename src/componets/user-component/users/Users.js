import {useEffect, useState} from "react";
import {getUsersAxios} from "../../../services/user.api.axios";
import User from "./User";
import './User.css'

function Users() {
    let [users, setUsers] = useState([]);
    let [user, setUser] = useState(null);

    const lift = (obj) => {
        setUser(obj);
    }

    useEffect(() => {
        getUsersAxios().then(value => setUsers(value.data))
    }, []);

    return (
        <div className="users">
            <div className="additional_info">
                <hr/>
                <h3 className="information">{user?.username}</h3>
                <hr/>
            </div>
            {users.map((user, index) => (<User item={user} key={index} lift={lift} />))}
        </div>
    );
}

export default Users;
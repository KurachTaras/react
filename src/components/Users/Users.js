import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getUsers} from "../../services";
import {LOAD_USERS} from "../../reducers";
import {User} from "../User/User";

const Users = () => {

    let state = useSelector(state => state);
    console.log(state);
    let dispatch = useDispatch();

    useEffect(() => {
        getUsers().then(value => {
            dispatch({type: LOAD_USERS, payload: value});
        })
    }, [])

    return (
        <div>
            {
                state.usersReducer.users.map((user, index) => (<User user={user} key={index} />))
            }
        </div>
    );
};

export {Users};
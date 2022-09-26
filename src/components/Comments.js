import {useState} from "react";
import {useEffect} from "react";
import {getComments} from "../services";
import Comment from "./Comment";
import {Outlet} from "react-router-dom";
import './Comment.css'

const Comments = () => {
    let [comments, setComments] = useState([]);

    useEffect(() => {
        getComments().then(value => setComments(value));
    }, [])

    return (
        <div className={'comments'}>
            <div className={'postOfComment'}>
                <Outlet />
            </div>
            {
                comments.map((comment, index) => (<Comment item={comment} key={index} />))
            }
        </div>
    );
};

export default Comments;
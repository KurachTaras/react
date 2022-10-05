import {useDispatch, useSelector} from "react-redux";
import {getComments} from "../../services";
import {LOAD_COMMENTS} from "../../reducers";
import {Comment} from "../Comment/Comment";
import {useEffect} from "react";

const Comments = () => {

    let state = useSelector(state => state);
    console.log(state);
    let dispatch = useDispatch();

    useEffect(() => {
        getComments().then(value => {
            dispatch({type: LOAD_COMMENTS, payload: value});
        })
    }, [])

    return (
        <div>
            {
               state.commentsReducer.comments.map((comment, index) => (<Comment comment={comment} key={index} />))
            }
        </div>
    );
};

export {Comments};
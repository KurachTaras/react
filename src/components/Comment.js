import {useNavigate} from "react-router-dom";
import './Comment.css'

const Comment = (props) => {
    let {item: comment} = props;
    let navigate = useNavigate();

    return (
        <div className={'comment_card'}>
            <div>{comment.id} - {comment.name}</div>
            <div className={'btn'}>
                <button className={'comment_btn'} onClick={() => {
                    navigate(comment.id.toString(), {state: {...comment}});
                }}> Post of Comment
                </button>
            </div>
        </div>
    );
};

export default Comment;
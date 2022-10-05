import {LOAD_COMMENTS} from "./comments.actions";

const commentsReducer = (state = {comments: [], post: null}, action) => {
    switch (action.type) {
        case LOAD_COMMENTS:
            return {
                ...state,
                comments: action.payload
            };
        default:
            return state;
    }
}

export {
    commentsReducer
}
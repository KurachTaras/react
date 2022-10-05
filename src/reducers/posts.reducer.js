import {LOAD_POSTS} from "./posts.actions";

const postsReducer = (state = {posts: [], post: null}, action) => {
    switch (action.type) {
        case LOAD_POSTS:
            return {
                ...state,
                posts: action.payload
            };
        default:
            return state;
    }
}

export {
    postsReducer
}
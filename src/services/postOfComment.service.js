import {_url, urls} from "../config";

const getPostOfComment = (postId) => {
    return fetch(`${_url}${urls.posts}/${postId}`)
        .then(value => value.json())
}

export {
    getPostOfComment
}
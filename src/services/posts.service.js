import {_url, urls} from "../config";

const getPosts = () => {
    return fetch(`${_url}${urls.posts}`)
        .then(value => value.json())
}

export {
    getPosts
}
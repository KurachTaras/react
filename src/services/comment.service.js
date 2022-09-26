import {_url, urls} from "../config";

const getComments = () => {
    return fetch(`${_url}${urls.comments}`)
        .then(value => value.json())
}

export {
    getComments
}
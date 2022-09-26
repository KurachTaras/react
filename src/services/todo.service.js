import {_url, urls} from "../config";

const getTodos = () => {
    return fetch(`${_url}${urls.todos}`)
        .then(value => value.json())
}

export {
    getTodos
}
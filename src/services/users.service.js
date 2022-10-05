import {_url, urls} from "../config";

const getUsers = () => {
    return fetch(`${_url}${urls.users}`)
        .then(value => value.json())
}

export {
    getUsers
}
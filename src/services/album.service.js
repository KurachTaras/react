import {_url, urls} from "../config";

const getAlbums = () => {
    return fetch(`${_url}${urls.albums}`)
        .then(value => value.json())
}

export {
    getAlbums
}
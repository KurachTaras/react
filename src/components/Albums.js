import React from 'react';
import {useState} from "react";
import {useEffect} from "react";
import {getAlbums} from "../services";
import Album from "./Album";
import './Album.css'

const Albums = () => {
    let [albums, setAlbums] = useState([]);

    useEffect(() => {
        getAlbums().then(value => setAlbums(value));
    }, [])

    return (
        <div className={'albums'}>
            {
                albums.map((album, index) => (<Album item={album} key={index} />))
            }
        </div>
    );
};

export default Albums;
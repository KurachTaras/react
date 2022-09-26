import React from 'react';
import './Album.css'

const Album = (props) => {
    let {item: album} = props;

    return (
        <div className={'album_card'}>
            <div>{album.id} - {album.title}</div>
        </div>
    );
};

export default Album;
import React from 'react';
import {NavLink} from "react-router-dom";

import css from './Header.module.css'

const Header = () => {
    return (
        <div>
            <div className={css.header}>
                <NavLink to={'/Users'}>Users</NavLink>
                <NavLink to={'/Posts'}>Posts</NavLink>
                <NavLink to={'/Cars'}>Cars</NavLink>
            </div>
        </div>
    );
};

export {Header};
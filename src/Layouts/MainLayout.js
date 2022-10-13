import React from 'react';

import {Header, UserHeader} from "../components";

import {Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            <Header/>
            <UserHeader/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};
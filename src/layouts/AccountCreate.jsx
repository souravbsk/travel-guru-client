/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../components/Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import brandLogo from "../assets/logo.png";


// eslint-disable-next-line no-unused-vars
const AccountCreate = () => {
    return (
        <div>
            <Header textColor='black' brandLogo={brandLogo}></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default AccountCreate;
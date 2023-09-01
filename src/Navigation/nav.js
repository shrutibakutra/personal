import React from 'react';
import { Link } from "react-router-dom";

export const MainNav = () => {
    return (
        <div className='main-header'>
            <div><Link exact to="/">Home</Link></div>
            <div><Link to="/work">Work</Link></div>
        </div>
    );
};
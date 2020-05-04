import React from 'react';

import './style.css';
import logo from '../../assets/logo.png';

export default function Header() {
    return (
        <>
            <div className="header-container">
                <div className="header-content">
                    <img src={logo} alt="Startup Generator"/>
                </div>
            </div>
        </>
    )
}
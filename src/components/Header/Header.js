import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className='header'>
                <h1>Sports Active Club</h1>
                <div>
                    <a href="./home">Home</a>
                    <a href="./about">About</a>
                </div>
            </div>
        </div>
    );
};

export default Header;
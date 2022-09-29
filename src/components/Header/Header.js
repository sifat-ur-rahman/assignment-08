import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolleyball } from '@fortawesome/free-solid-svg-icons'
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className='header'>
                <div>
                    <h1><FontAwesomeIcon icon={faVolleyball} />  Sports Active Club</h1>
                </div>

                <div>
                    <a href="./home">Home</a>
                    <a href="./about">About</a>
                </div>
            </div>
        </div>
    );
};

export default Header;
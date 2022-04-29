import { faAws, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const { click, setClick } = useState(false);
    const handleClick = () => setClick(!click);
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <div className="flex text-6xl">
                        <Link to="/" className="navbar-logo">
                            ARK
                            <FontAwesomeIcon
                                icon={faAws}
                                className="hover:text-red-500"
                            ></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                        </Link>
                        <div className="menu-icon" onClick={handleClick}>
                            <FontAwesomeIcon
                                icon={faBars}
                                size="2x"
                            ></FontAwesomeIcon>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;

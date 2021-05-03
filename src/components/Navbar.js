import React from 'react';

export const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbar-logo">
                    <a href="/#" className="logo">Mixed Reality</a>
                </div>
                
                <div className="navbar-links">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/#">Documentation</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#">Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#">Start a Demo</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#">Free Trial</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
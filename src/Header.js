import React from 'react';

const Header = () => {
    
    const myFunction = () => {
        let x = document.getElementById("myTopnav");
        if (x.className === "navbar-lists") {
            x.className += " responsive";
        } else {
            x.className = "navbar-lists";
        }
    }
    
    return (
        <header className="header">
            <a href="/">
                <img src="https://media.geeksforgeeks.org/gfg-gg-logo.svg" 
                     alt="Brand logo" />
                <span className="brand-logo-name">
                    PsP_Class
                </span>
            </a>
            <nav className="navbar">
                <ul className="navbar-lists" id="myTopnav">
                    <li>
                        <i className="fas fa-home"></i>
                        <a className="navbar-link home-link" href="#">
                            Home
                        </a>
                    </li>
                    <li>
                        <i className="fas fa-user"></i>
                        <a className="navbar-link about-link" 
                           href="#about-us-section">
                            Login
                        </a>
                    </li>
                    <li>
                        <i className="fas fa-envelope"></i>
                        <a className="navbar-link contact-link" 
                           href="#contact-form">
                            Sign
                        </a>
                    </li>
                </ul>
                <a href="javascript:void(0)" 
                   className="icon" onClick={myFunction}>
                    <i className="fa fa-bars">III</i>
                </a>
            </nav>
        </header>
    )
}

export default Header;

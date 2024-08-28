import React from "react";
import palgharLogo from "./../../assets/Palghar.png"
import logo1 from "../../assets/Logo.png"
import './Header.css'
const Header = () => {
    return (
        <>
    <header className='header'>
        <div className="logo-container">
            <div className="text-content">
                <h1>Rotaract Club of Palghar</h1>
                <p>Dist. 3141 | Club ID.: 90680</p>
            </div>
            <img src={logo1} alt="Rotaract_logo" className="rotaract-logo" />
        </div>
            <img src={palgharLogo} alt="Palghar Logo" className="palghar-logo" />
    </header>
</>
    )
}
export default Header;
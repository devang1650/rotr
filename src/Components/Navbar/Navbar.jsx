import React from 'react'
import "./Navbar.css"
import palgharLogo from "./../../assets/Palghar.png"

const Navbar = () => {
    return (
        <>
  
            <nav className="navbar">
                 <a href="#">Home</a>
                 <a href="#">Message</a>
                 <a href="#">About Us</a>
                 <a href="#">Project</a>
                 <a href="#">Partner In Service</a>
                 <a href="#">Planner</a>
                 <a href="#">Calendar</a>
                 <button>Admin Login</button>
                 <button>Join Rotaract</button>
                 <select>
                    <option>2023-2024</option>
                </select>
            </nav>
    
        </>
    )
}

export default Navbar
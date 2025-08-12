import React from 'react'
import "./css/Navbar.css"

const Navbar = () => {
  return (
    <>
    <div className="navbar">
        <div className="first-section">
            <p>Look Up</p>
        </div>
        <div className="second-section">
            <ul>
                <li><p>Home</p></li>
                <li><p>About</p></li>
                <li><p>Services</p></li>
                <li><p>Contact</p></li>
            </ul>
        </div>
    </div>

    </>
  )
}

export default Navbar
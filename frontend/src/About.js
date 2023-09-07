import React from "react"
import { Link, useLocation } from "react-router-dom"

const About = () => {

    const location = useLocation();

    return <div className="container">
        <header className="mt-4 mb-4 text-center">
            <h1 className="display-4">Group 1</h1>
            <nav className="d-flex justify-content-end">
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>About Us</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/how-to-use" className={`nav-link ${location.pathname === '/how-to-use' ? 'active' : ''}`}>How to Use</Link>
                    </li>
                </ul>
            </nav>
        </header>
        <div>
            insert about us here
        </div>
        
    </div>

}

export default About 
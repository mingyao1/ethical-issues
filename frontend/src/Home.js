import React from "react"
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"
import Question from "./Question"


const Home = () => {
    const location = useLocation();

    return <>

        <div className='container'>
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

            <Question />

        </div>
    </>
}

export default Home 
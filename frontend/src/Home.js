import React from "react"
import { Link } from "react-router-dom"
import Question from "./Question"


const Home = () => {

    return <>

        <div className='container'>
            <header className="mt-2">
                <h1>Group 1</h1>
            </header>
            <nav>
                <ul className="nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link">About Us</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/how-to-use" className="nav-link">How to Use</Link>
                    </li>
                </ul>
            </nav>

            <Question/>

        </div>
    </>
}

export default Home 
import React from "react"
import Question from "./Question"

const Home = () => {

    return <>

        <div className='container'>
            <header className='mt-2'>
                Group 1
            </header>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>How to Use</li>
                </ul>
            </nav>

            <Question/>

        </div>
    </>
}

export default Home 
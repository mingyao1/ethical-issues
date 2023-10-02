import React, { useState } from "react"
import axios from "axios"

const Question = () => {

    const [question, setQuestion] = useState('');
    const [result, setResult] = useState('');

    const handleOptionClick = async (option) => {
        // Replace this with logic to display actual results
        //setSelectedOption(option);
        //getResult(option, question)

        setResult(`${option} - thinking...`);
        const { data } = await axios.post("http://localhost:4000/", {
            "position": option.toLowerCase(),
            "question": question,
        });
        setResult(`${option}: ${data.response}`);
    };

    return <div className="container text-center">
        <div className="input-group mb-4 mt-5 text-center">
            <textarea
                type="text"
                className="form-control"
                style={{
                    height: '3rem',
                    maxWidth: '80rem',
                }}
                placeholder="Enter your ethical question"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
            />
        </div>
        <div className="options">
            See opinions:
            <button className="btn btn-primary btn-block m-2 col-1" onClick={() => {

                handleOptionClick('For');
            }}>For</button>
            <button className="btn btn-danger btn-block m-2 col-1" onClick={() => {

                handleOptionClick('Against')
            }}>Against</button>
            <button className="btn btn-secondary btn-block m-2 col-1" onClick={() => {

                handleOptionClick('Neutral')
            }}>Neutral</button>
        </div>
        <div className="mt-4">
            {result ? (
                <div className="card border-0 bg-light">
                    <div className="card-body">
                        <p className="card-text">{result}</p>
                    </div>
                </div>
            ) : null}
        </div>
    </div>

}

export default Question
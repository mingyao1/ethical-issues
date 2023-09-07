import React, { useState } from "react"

const Question = () => {

    const [question, setQuestion] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    const [result, setResult] = useState('');

    const handleOptionClick = (option) => {
        // Replace this with logic to display actual results
        setSelectedOption(option);
        //getResult(option, question)
        setResult(`You selected: ${option}`);
    };



    return <>
        <div className="question-input">
            <input
                type="text"
                placeholder="Enter your ethical question"
                value={question}
                onChange= {(e) => setQuestion(e.target.value)}
            />
        </div>
        <div className="options">
            <button onClick={() => handleOptionClick('For')}>For</button>
            <button onClick={() => handleOptionClick('Against')}>Against</button>
            <button onClick={() => handleOptionClick('Neutral')}>Neutral</button>
        </div>
        <div className="result">
            <p>{result}</p>
        </div>
    </>
}

export default Question
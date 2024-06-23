import React from 'react';

function Questions({ questions, handleQuestionChange }) {
    // Check if questions is undefined or null
    if (!questions) return null;

    return (
        <>
            {questions.map((elem, ind) => (
                <div key={ind} className="flex flex-col gap-2 w-full">
                    <label htmlFor={`question-${ind}`}>{elem.q}</label>
                    <input
                        id={`question-${ind}`}
                        className='w-full h-[45px] rounded-md outline-none border-2 border-blue-400 px-4'
                        value={elem.ans}
                        onChange={(e) => handleQuestionChange(ind, e.target.value)}
                    ></input>
                </div>
            ))}
        </>
    );
}

export default Questions;

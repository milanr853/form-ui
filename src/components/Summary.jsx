import React from 'react';

const Summary = ({ data }) => {
    console.log(data)
    return (
        <div className="font-sans w-full">
            <p className="mb-2"><strong>Name:</strong> {data.fullname}</p>
            <p className="mb-2"><strong>Email:</strong> {data.email}</p>
            <p className="mb-4 whitespace-pre-wrap break-words"><strong>Feedback:</strong> {data.feedback}</p>

            {data.technology && (
                <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">Technology Details</h3>
                    <p className="mb-2"><strong>Language:</strong> {data.technology.language}</p>
                    <p className="mb-2"><strong>Experience:</strong> {data.technology.experience}</p>
                    <h4 className="text-lg font-medium mt-4 mb-2">Technology Questions:</h4>
                    <ul className="list-none pl-0">
                        {data.technology.questions.map((question, index) => (
                            <li key={index} className="mb-1">
                                <strong className="inline-block w-48">{question.q}</strong>: {question.ans}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {data.health && (
                <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">Health Details</h3>
                    <p className="mb-2"><strong>Exercise Frequency:</strong> {data.health.exercise_frequency}</p>
                    <p className="mb-2"><strong>Diet Preference:</strong> {data.health.diet_preferance}</p>
                    <h4 className="text-lg font-medium mt-4 mb-2">Health Questions:</h4>
                    <ul className="list-none pl-0">
                        {data.health.questions.map((question, index) => (
                            <li key={index} className="mb-1">
                                <strong className="inline-block w-48">{question.q}</strong>: {question.ans}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {data.education && (
                <div>
                    <h3 className="text-xl font-semibold mb-2">Education Details</h3>
                    <p className="mb-2"><strong>Qualification:</strong> {data.education.qualification}</p>
                    <p className="mb-2"><strong>Field of Study:</strong> {data.education.fieldOfStudy}</p>
                    <h4 className="text-lg font-medium mt-4 mb-2">Education Questions:</h4>
                    <ul className="list-none pl-0">
                        {data.education.questions.map((question, index) => (
                            <li key={index} className="mb-1">
                                <strong className="inline-block w-48">{question.q}</strong>: {question.ans}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Summary;

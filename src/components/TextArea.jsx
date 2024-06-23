import React from 'react';

function TextArea({ label = "a", reference }) {
    return (
        <div className="flex flex-col gap-2 w-full">
            <label htmlFor={label}>{label}</label>
            <input
                ref={reference}
                className='w-full h-[45px] rounded-md outline-none border-2 border-blue-400 px-4'
                name={label}
                id={label}
            >
            </input>
        </div>
    );
}

export default TextArea;

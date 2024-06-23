import React from 'react'
import capitalizeWords from '../utils/capitalize'
import { allowAlphabetsOnly } from '../utils/validation'


function StyledInput({ type, reference, placeholder = "", format = "text" }) {
    return (
        <div className="flex flex-col gap-2 w-full">
            <label htmlFor={type}>{capitalizeWords(type)}: </label>
            <input
                className='w-full h-[45px] rounded-md outline-none border-2 border-blue-400 px-4'
                type={format}
                name={type}
                id={type}
                ref={reference}
                placeholder={placeholder}
            />
        </div>
    )
}

export default StyledInput
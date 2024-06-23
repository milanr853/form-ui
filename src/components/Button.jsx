import React from 'react'

function Button({ text = "Submit", submit }) {
    return (
        <button onClick={submit} className='w-full h-[45px] rounded-md outline-none bg-teal-500 text-white text-lg px-4'>{text}</button>
    )
}

export default Button
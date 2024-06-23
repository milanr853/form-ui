import React from 'react'

function Wrapper({ children }) {
    return (
        <div className='rounded-lg flex flex-col items-center gap-8 w-[475px] min-h-[350px] bg-white p-4'>
            <header className='text-2xl underline'>Survey Form</header>

            {children}
        </div>
    )
}

export default Wrapper
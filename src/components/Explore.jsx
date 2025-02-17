import React from 'react'
import { Link } from 'react-router-dom'
const Explore = () => {
    return (
        <>
            <div className='h-screen w-full'>
                <div className=''>
                    <h1 className='underline'>Explore</h1>
                    <h1>(07)</h1>
                    <h1 className='underline'>Dream Types</h1>
                </div>
                <div className='grid grid-cols-3'>
                    <div>
                        <h2>Share Your Unique
                            Dream Symbols</h2>
                    </div>
                    <div>
                        <p>Your dreams and insights are a vital part of the
                            collective subconscious. Contribute your unique
                            dream themes and their explanations to enrich
                            our growing database.</p>
                            <Link to="/" className='underline'>hello@openbook.im</Link>
                    </div>
                    <div></div>
                </div>
                <div>
                    <h3 className='hover:underline'>OpenBook ©2024</h3>
                    <h3>Credits</h3>
                </div>
            </div>
        </>
    )
}

export default Explore
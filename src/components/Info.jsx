import React from 'react'
import { Link } from 'react-router-dom'
import StarWhite from "../assets/star_white.svg"
const Info = () => {
    return (
        <>
            <div className='h-screen w-full  font-display grid grid-cols-2 border-t-1 [&>*]:flex [&>*]:justify-around
            [&>*]:items-center [&>*]:flex-col'>
                <div className='px-5'>
                    <h3 className='text-sm '>ABOUT US</h3>
                    <div className='text-center w-2/3'>
                        <p>At OpenBook, we believe that every dream is a narrative worth exploring—a hidden treasure trove of emotions, experiences, and insights just waiting to be unearthed. Your dreams are more than mere flights of fancy – they are your subconscious speaking to you in a language that transcends words.</p>
                        <p className='py-5'>OpenBook is here to translate that language, offering an in-depth guide to dream themes, types, and their interpretations in our complex, modern world.</p>
                    </div>
                    <Link className='underline text-xl' to="/">Learn More</Link>
                </div>
                <div className='text-white bg-black'>
                    <h3 className='text-sm font-semibold'>REAL-TIME ANALYSIS</h3>
                    <div className='flex flex-col items-center text-center gap-10'>
                        <h1 className='text-6xl font-semibold w-2/3 '>Consult the Dream Oracle</h1>
                        <img className='size-4' src={StarWhite} />
                    </div>

                    <Link className='underline text-xl' to="/">Interpret Dream</Link>

                </div>
            </div>
        </>
    )
}

export default Info
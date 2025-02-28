import React from 'react'
import { Link } from 'react-router-dom'
import ShuffleText from './ShuffleText';
const Explore = () => {
    return (
        <>
            <div  className=' h-[120vh]  bg-white w-full px-10 border-t-1 flex flex-col justify-between pt-20 pb-6 font-display  '>
                <div className='flex justify-between text-[57px] group-[]: '>
                    <Link className='underline'><ShuffleText text="Explore" /></Link>
                    <h1><ShuffleText text="(07)" /></h1>
                    <Link className='underline'><ShuffleText text="Dream Types" /></Link>
                </div>
                <div className='grid grid-cols-3  h-70'>
                    <div className='flex  items-start  '>
                        <h2 className='text-[52px] font-semibold leading-tight'>Share Your Unique Dream Symbols</h2>
                    </div>
                    <div className='flex flex-col justify-end gap-4' >
                        <p>Your dreams and insights are a vital part of the
                            collective subconscious. Contribute your unique
                            dream themes and their explanations to enrich
                            our growing database.</p>
                            <Link to="/" className='underline'><ShuffleText text="hello@openbook.im" /></Link>
                    </div>
                    <div></div>
                </div>
                <div className='flex justify-between '>
                    <h3 className='hover:underline'><ShuffleText text="OpenBook ©2024" /></h3>
                    <h3><ShuffleText text="Credits" /></h3>
                </div>
            </div>
        </>
    )
}

export default Explore
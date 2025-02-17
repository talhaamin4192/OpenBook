import React from 'react'
import { Link } from 'react-router-dom'
import Star from "../assets/star.svg"
import Alley from "../assets/Alley.webp"
import Animal from "../assets/Animal.webp"
import Falling from "../assets/Falling.webp"
import Journey from "../assets/Journey.webp"
import Ocean from "../assets/Ocean.webp"
const Featured = () => {
    return (
        <div className='h-screen w-full border-t-1 grid grid-cols-2 font-display'>
            <div className='flex justify-around items-center flex-col  '>
                <h3 className='font-semibold text-sm'>FEATURED SYMBOLS</h3>
                <div className='flex flex-col items-center gap-5'>
                    <h1 className='text-[117px] font-semibold tracking-widest'>A–Z</h1>
                    <img src={Star} alt="" />
                    <div className='text-center '>
                        <div>Whether flying over majestic landscapes or wandering</div>
                        <div>through unfamiliar buildings, your dreams go beyond</div>
                        <div> mere fantasy. They represent your subconscious</div>
                        <div>communicating in a language beyond mere words.</div>
                    </div>
                </div>
                <Link className='underline' to='/'>Explore Symbols</Link>
            </div>
            <div className='flex [&>*]:border-l-1 text-xl [&>*]:flex [&>*]:justify-center [&>*]:gap-3 [&>*]:item-center [&>*]:flex-col'>
                <div>
                    <Link to='/' className='hover:underline' >Alley</Link>
                    <img src={Alley} alt="" />
                </div>
                <div>
                    <Link to='/' className='hover:underline' >Animals</Link>
                    <img src={Animal} alt="" />
                </div>
                <div>
                    <Link to='/' className='hover:underline' >Falling</Link>
                    <img src={Falling} alt="" />
                </div>
                <div>
                    <Link to='/' className='hover:underline' >Journey</Link>
                    <img src={Journey} alt="" />
                </div>
                <div>
                    <Link to='/' className='hover:underline' >Ocean</Link>
                    <img src={Ocean} alt="" />
                </div>
            </div>

        </div>
    )
}

export default Featured
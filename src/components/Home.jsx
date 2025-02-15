import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
const Home = () => {
  return (
    <>
      <div>
        <div className=' h-20 flex justify-between px-8  items-center font-semibold'>
          <div className='flex '>
            <img src={logo} alt="" />
            <h2>OpenBook</h2>
          </div>
          <div className='flex  justify-end gap-40 ' >
            <div className='[&>*]:block [&>*]:hover:underline' >
              <Link>Symbols</Link>
              <Link>Types</Link>
            </div>
            <div className='[&>*]:block [&>*]:hover:underline'>
              <Link>Oracle AI</Link>
              <Link>About</Link>
            </div>
            <div>
              <Link className='hover:underline'>Contribute</Link>
            </div>
          </div>
        </div>
        <div>
          <div>Uncovering</div>
          <div> Hidden Meaning -</div>
          <div>A Guide to Dream</div>
          <div>Analysis and Symbols</div>
          <div>in the Modern World.</div>
        </div>
      </div>

    </>
  )
}

export default Home
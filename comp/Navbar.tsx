import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex flex-col md:flex-row my-5 justify-center '> 
      <ul className='flex flex-col md:flex-row md:space-x-5 space-y-2 md:space-y-0 text-center'>
        <li className='  hover:border-solid hover:border-black hover:scale-110'><Link href='#home'>Home</Link></li>
        <li className='   hover:border-solid hover:border-black hover:scale-110'><Link href='#about'>About</Link></li>
        <li className='  hover:border-solid hover:border-black hover:scale-110'><Link href='#project'>Projects</Link></li>
        
      </ul>
    </nav>
  )
}

export default Navbar
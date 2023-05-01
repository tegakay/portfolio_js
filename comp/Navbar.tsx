import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex flex-col md:flex-row my-5 justify-center '> 
      <ul className='flex flex-col md:flex-row space-x-5'>
        <li className=' hover:bg-white hover:border-solid hover:border-black hover:scale-110'><Link href='/'>Home</Link></li>
        <li className=' hover:bg-violet-600  hover:border-solid hover:border-black hover:scale-125'><Link href='/about'>About</Link></li>
        <li className=' hover:bg-violet-600  hover:border-solid hover:border-black hover:scale-125'><Link href='/contact'>Contact</Link></li>
        
      </ul>
    </nav>
  )
}

export default Navbar
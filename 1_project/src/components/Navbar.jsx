import React from 'react'
import { IoCart } from "react-icons/io5";

function Navbar() {
  return (
    <div className='bg-[#FE9E0D] flex items-center justify-between p-5 '>
      <div>
        <h1 className='text-4xl ml-10 font-bold'>Foodie</h1>
      </div>
      <div className='flex gap-10 text-xl font-semibold'>
        <h3>Home</h3>
        <h3>About</h3>
        <h3>Testimonials</h3>
        <h3>Contacts</h3>
      </div>
      <div className='flex gap-10'>
        <IoCart className='text-3xl'/>
        <button className='text-lg bg-[#FFDD95] rounded-2xl pl-3 pr-3 shadow-2xl'>Booking Now</button>
      </div>
    </div>
  )
}

export default Navbar
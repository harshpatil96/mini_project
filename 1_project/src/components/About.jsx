import React from 'react'
import { MdNoMealsOuline } from "react-icons/md";
import { FaHandPointer } from "react-icons/fa";
import { FaTruckArrowRight } from "react-icons/fa6";



function About() {
  return (
    <div className='items-center justify-center h-screen'>
      <div className='text-center'>
        <div className='text-[#F4980D] text-lg'>About Work</div>
        <div className='text-[#4C4C4C] text-4xl pt-6'>How It Works</div>
        <p className='text-[#828282] text-lg pt-6 w-45'>Lorem ipsum dolor sit amet consectetur. <br/>Non tincidunt magna non et elit. <br/>Dolor  turpis molestie duimagnis facilisis at fringilla quam.</p>
      </div>

        <div className='flex gap-40 mt-16 justify-center'>
        {/*container 1*/}
          <div className='container bg-[#F5EDED] w-[192px] h-[260px] rounded-xl p-3 justify-center text-center shadow-lg'>
            <FaHandPointer  className='text-8xl ml-8 mt-3 text-[#F4980D]'/>
            <div className='text-[#505050] text-lg font-semibold mt-3'>Choose How Often</div>
            <p className='text-[#474747] text-xs mt-2'>Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.</p>
          </div>

        {/*container 2*/}
          <div className='container bg-[#F5EDED] w-[192px] h-[260px] rounded-xl p-3 justify-center text-center shadow-lg'>
            <MdNoMealsOuline className='text-8xl ml-8 mt-3 text-[#F4980D]'/>
            <div className='text-[#505050] text-lg font-semibold mt-3'>Pick Meals</div>
            <p className='text-[#474747] text-xs mt-2'>Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.</p>
          </div>

        {/*container 3*/}
          <div className='container bg-[#F5EDED] w-[192px] h-[260px] rounded-xl p-3 justify-center text-center shadow-lg'>
            <FaTruckArrowRight className='text-8xl ml-8 mt-3 text-[#F4980D]'/>
            <div className='text-[#505050] text-lg font-semibold mt-3'>Fast Deliveries</div>
            <p className='text-[#474747] text-xs mt-2'>Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.</p>
          </div>
        </div>
    </div>
  )
}

export default About
import { useState } from 'react'
import './App.css'
import { CiSearch } from "react-icons/ci";
import { BiHomeAlt } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { RiBarChartBoxLine } from "react-icons/ri";
import { AiOutlineBell } from "react-icons/ai";
import { AiOutlinePieChart } from "react-icons/ai";
import { GoInbox } from "react-icons/go";

function App() {

  return (
    <>
      <div className='w-[266px] h-screen bg-white'>

        <div className='duckProfile flex gap-[12px] justify-center items-center'>
          <img src="images/avatar.png" alt="avatar" className='mt-6' />
          <div className='profileText mt-[31.5px]'>
            <h2 className='text-[#09090A] text-[16px] font-bold font-opensans'>Duck UI</h2>
            <h3 className='text-[#1F1F22] text-[14px] font-normal font-opensans'>Duckui@demo.com</h3>
          </div>
        </div>

        <div className='flex justify-center relative'>
          <CiSearch className='text-[24px] absolute top-[60%] right-[75%]'/>
          <input className='mt-[44px] w-[218px] h-[56px] bg-[#F5F5F5] border-none rounded-[16px] pl-[56px] text-[#2A2A2E]' type="text" placeholder='Search...' />
        </div>

        <div className='menuOptions flex flex-col justify-center items-center mt-[44px]'> 
          <ul className='flex flex-col gap-6 text-[#09090A] text-[16px]'>

            <li className='flex items-center gap-4'><BiHomeAlt className='text-[24px]' />Dashboard</li>
            <li className='flex items-center gap-4'><RiBarChartBoxLine className='text-[24px]' />Revenue</li>
            <li className='flex items-center gap-4'><AiOutlineBell className='text-[24px]' />Notifications</li>
            <li className='flex items-center gap-4'><AiOutlinePieChart className='text-[24px]'  />Analytics</li>
            <li className='flex items-center gap-4'><GoInbox className='text-[24px]' />Inventory</li>
          </ul>
        </div>

        <div>

        </div>
      </div>

      
    </>
  )
}

export default App

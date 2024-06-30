import React from 'react'
import { CiSearch } from "react-icons/ci";
import { BiHomeAlt } from "react-icons/bi";
import { RiBarChartBoxLine } from "react-icons/ri";
import { AiOutlineBell } from "react-icons/ai";
import { AiOutlinePieChart } from "react-icons/ai";
import { GoInbox } from "react-icons/go";
import { Link, NavLink } from 'react-router-dom';
import { IoLogOutOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <>
      <div className='w-[266px] h-screen bg-white hidden md:block'>

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

        <div className='menuOptions flex flex-col justify-center ml-[40px] mt-[44px]'> 
          <ul className='flex flex-col gap-[44px] text-[#09090A] text-[16px] font-normal font-opensans'>
            <li><NavLink to='/' className={({isActive})=>isActive?'flex items-center gap-4 bg-slate-300 h-[50px]':'flex items-center gap-4'}><BiHomeAlt className='text-[24px]' />Dashboard</NavLink></li>
            <li><NavLink to='/revenue' className={({isActive})=>isActive?'flex items-center gap-4 bg-slate-300 h-[50px]':'flex items-center gap-4'}><RiBarChartBoxLine className='text-[24px]' />Revenue</NavLink></li>
            <li><NavLink to='/notification' className={({isActive})=>isActive?'flex items-center gap-4 bg-slate-300 h-[50px]':'flex items-center gap-4'}><AiOutlineBell className='text-[24px]' />Notification</NavLink></li>
            <li><NavLink to='/analytics' className={({isActive})=>isActive?'flex items-center gap-4 bg-slate-300 h-[50px]':'flex items-center gap-4'}><AiOutlinePieChart className='text-[24px]' />Analytics</NavLink></li>
            <li><NavLink to='/inventory' className={({isActive})=>isActive?'flex items-center gap-4 bg-slate-300 h-[50px]':'flex items-center gap-4'}><GoInbox className='text-[24px]' />Inventory</NavLink></li>
          </ul>
        </div>  

        <div className='logout flex ml-[40px] mt-[100px] gap-4'>
          <IoLogOutOutline className='text-[25px]'/>
          <h2 className='font-normal font-opensans'>Logout</h2>        
        </div>      
    </div>

    <div className='w-[104px] h-screen bg-white md:hidden'>

          <div className='flex justify-center items-center'>
            <img className='mt-[24px]' src="images/avatar.png" alt="avatar" />
          </div> 

          <div className='flex justify-center relative'>
            <CiSearch className='text-[24px] absolute top-[60%] right-[40%]'/>
            <input className='mt-[44px] w-[56px] h-[56px] bg-[#F5F5F5] border-none rounded-[16px] pl-[56px] text-[#2A2A2E]' type="text" placeholder='Search...' />
          </div>

          < div className='menuIcon flex flex-col justify-center items-center'>
            <ul className='flex flex-col gap-[44px] text-[#09090A] text-[16px] mt-[44px]'>
              <li><NavLink to='/' className={({isActive})=>isActive?'flex items-center gap-4 bg-slate-300 h-[50px]':'flex items-center gap-4'}><BiHomeAlt className='text-[24px]' /></NavLink></li>
              <li><NavLink to='/revenue' className={({isActive})=>isActive?'flex items-center gap-4 bg-slate-300 h-[50px]':'flex items-center gap-4'}><RiBarChartBoxLine className='text-[24px]' /></NavLink></li>
              <li><NavLink to='/notification' className={({isActive})=>isActive?'flex items-center gap-4 bg-slate-300 h-[50px]':'flex items-center gap-4'}><AiOutlineBell className='text-[24px]' /></NavLink></li>
              <li><NavLink to='/analytics' className={({isActive})=>isActive?'flex items-center gap-4 bg-slate-300 h-[50px]':'flex items-center gap-4'}><AiOutlinePieChart className='text-[24px]' /></NavLink></li>
              <li><NavLink to='/inventory' className={({isActive})=>isActive?'flex items-center gap-4 bg-slate-300 h-[50px]':'flex items-center gap-4'}><GoInbox className='text-[24px]' /></NavLink></li>
            </ul>

              <IoLogOutOutline className='text-[25px] mt-[100px]'/>     

          </div>       
        </div>

    
  </>
  )
}

export default Navbar
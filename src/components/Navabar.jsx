import React from 'react'
import {TbAlpha} from 'react-icons/tb';
import {IoIosMenu} from 'react-icons/io';
 
const Navabar = () => {

  return (
    <nav className='fixed z-40 flex w-full h-[4rem] items-center justify-between top-[-1px] bg-[#0B192E] py-6 px-[40px]'>
        <div className=" text-[#05BFDB] text-md font-mont" style={{fontSize: 'clamp(14px, 5vw, 24px)',}}>
            <TbAlpha />
        </div>
        <div className="navItems hidden md:flex font-mont gap-8 text-[.9rem] text-[#8EA39E] cursor-pointer">
            <a href="#home">            
              <div className="navLinks"><span className='text-[#05BFDB] mr-1'>01.</span>Home</div>
            </a>
            <a href="#about">
              <div className="navLinks"><span className='text-[#05BFDB] mr-1'>02.</span>About</div>
            </a>
            <a href="#project">
              <div className="navLinks"><span className='text-[#05BFDB] mr-1'>03.</span>Work</div>
            </a>
            <a href="#contact">
              <div className="navLinks"><span className='text-[#05BFDB] mr-1'>04.</span>Contact</div>
            </a>
        </div>
        <div className='hamburger md:hidden text-2xl text-[#05BFDB]'><IoIosMenu /></div>
    </nav>
  )
}

export default Navabar

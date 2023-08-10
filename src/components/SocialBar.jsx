import React from 'react'
import {LuGithub} from 'react-icons/lu'
import {FiTwitter,FiMessageSquare, FiLinkedin} from 'react-icons/fi';

const SocialBar = () => {
  return (
    <div className='hidden fixed z-10 lg:flex items-center justify-center bottom-0 left-8 min-w-[30px] min-h-[300px]'>
        <div className='flex flex-col gap-7 text-[1.3rem] text-gray-200 px-4 pt-2 h-full'>
            <a href='https://github.com/Go-groot' target="blank"><div title='Github' className='hover:text-[#05BFDB] hover:-translate-y-1 trasnition transition-transform ease-in-out'><LuGithub /></div></a>
            <a href='https://www.linkedin.com/in/siddharth-sharma-2101b0191/' target="blank"><div title='LinkedIn' className='hover:text-[#05BFDB] hover:-translate-y-1 trasnition transition-transform ease-in-out'><FiLinkedin /></div></a>
            <a href='mailto:Siddharthsharma0606@outlook.com?&subject=Hey Sid..&body=Cool portfolio website!' target="_blank"><div title='Gmail' className='hover:text-[#05BFDB] hover:-translate-y-1 trasnition transition-transform ease-in-out'><FiMessageSquare /></div></a>
            <div className='w-[1px] min-h-[100px] mt-1 border border-gray-200 mx-auto'></div>
        </div>
    </div>
  )
}

export default SocialBar

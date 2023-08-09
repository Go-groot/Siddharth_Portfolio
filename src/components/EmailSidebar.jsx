import React from 'react';

const EmailSideBar = ()=>{
    return(
        <div className='hidden fixed z-10 lg:flex items-center justify-center bottom-0 right-8 min-w-[30px] min-h-[300px]'>
        <div className='flex flex-col gap-7 text-[1rem] text-gray-400 px-4 pt-2 h-full'>
            <a href='mailto:Siddharthsharma0606@outlook.com?&subject=Hey Sid..&body=Cool portfolio website!'>
                <div style={{ writingMode: 'vertical-lr' }} className='hover:text-[#05BFDB] cursor-pointer hover:-translate-y-1 trasnition transition-transform ease-in-out'>
                        Siddharthsharma0606@outlook.com
                </div>
            </a>
            <div className='w-[1px] min-h-[100px] mt-1 border border-gray-200 mx-auto'></div>
        </div>
    </div>
    )
}


export default EmailSideBar;
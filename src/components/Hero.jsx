import React from 'react'

const Hero = () => {
  const Button = ({children,to})=>{
    return(
      <a href={to}>
        <div className='relative text-[#05BFDB] text-sm font-mono'>
          <button className={`absolute z-20 border-2 border-[#05BFDB] px-8 py-3 bg-[#0B192E] rounded-md hover:translate-x-1 hover:translate-y-1 transition-all top-0 left-0 whitespace-nowrap`}>
            {children}
          </button>
          <div className='absolute z-10 rounded-md whitespace-nowrap bg-[#05BFDB] px-8 py-3 top-0 left-0'>{children}</div>
        </div>
      </a>
    )
  }

  return (
    <section id='home' className='mt-[1px] min-h-[800px] h-[100vh] w-full bg-[#0B192E] px-[2rem] sm:px-[5%] lg:px-[15%]'>     
      <div className='flex flex-col gap-6 items-start min-h-[600px] justify-center h-[100vh]'>
        <p className='text-[#05BFDB] text-sm font-mont'>Hi, my name is</p>
        <div style={{fontSize:'clamp(40px,9vw,64px)',}}>
          <h1 className='whitespace-nowrap text-gray-200 font-extrabold leading-tight font-mont'>Siddharth.</h1>
          <h1 className='text-gray-400 font-extrabold leading-tight font-mont'>I build cool websites.</h1>
        </div>
        <p className='max-w-[65%] pb-4 text-gray-400 text-base font-mont'>More formally, I&apos;m a Front End Developer and I design and build engaging interactive
        experiences.
        </p>
        <Button to={'#about'}>Learn More!</Button>
      </div> 
    </section>
  )
}

export default Hero

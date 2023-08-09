import React from 'react'

const Contact = () => {
    const Button = ({children,to})=>{
        return(
          <a href={to}>
            <div className='relative text-[#05BFDB] text-sm font-mont'>
              <button className={`absolute z-20 border-2 border-[#05BFDB] px-8 py-3 bg-[#0B192E] rounded-md hover:translate-x-1 hover:translate-y-1 transition-all top-0 left-0 whitespace-nowrap`}>
                {children}
              </button>
              <div className='z-10 rounded-md whitespace-nowrap bg-[#05BFDB] px-8 py-3'>{children}</div>
            </div>
          </a>
        )
      }
  return (
    <section id='contact' className='min-h-[800px] h-[100vh] w-full bg-[#0B192E] px-[2rem] sm:px-[5%] lg:px-[15%]'>
      <div className='h-full w-full flex flex-col gap-4 items-center justify-center'>
        <div className='group w-1/2 flex flex-col items-start justify-center gap-6'>
            <h1 className='text-[#05BFDB] text-sm font-mont'>04. What's Next</h1>
            <h2 className='whitespace-nowrap text-gray-200 font-extrabold leading-tight font-mont text-[2.25rem]'>Don't Be Shy</h2>
            <p className='text-gray-400 font-extrabold leading-tight font-mont tracking-[.01rem]'>
            My inbox is open. I&apos;m always happy to answer a question or chat
            about code.            
            </p>
            <Button to={'mailto:sharmasiddharth724@gmail.com?&subject=Hey Sid&body=Cool portfolio website!'} >
                Say Hello
            </Button>
        </div>
      </div>
    </section>
  )
}

export default Contact

import React from 'react'

const About = () => {
  return (
    <section id='about' className='min-h-[800px] w-full bg-[#0B192E] px-[2rem] sm:px-[5%] lg:px-[15%]'>
        <div style={{fontSize: 'clamp(22px, 4vw, 28px)',}} className='flex flex-col gap-4 min-h-screen justify-center'>
            <div className='flex flex-row gap-3 flex-nowrap whitespace-nowrap items-center pb-6 tracking-tight'>
                <div className={`text-[#05BFDB] text-lg font-mont`}>.02</div>
                <div className={`text-gray-400 font-bold font-mont`}>About Me</div>
                <div className={`w-[50%] justify-center items-center h-[1px] bg-[#05BFDB]/10`}></div>
            </div>
            <div className='flex flex-col gap-6 text-gray-400 text-base font-mont'>
                <div className='flex flex-col sm:flex-row gap-8'>
                    <div className='flex flex-col gap-6 text-justify max-w-[600px] leading-relaxed tracking-[.01rem]'>
                        <p className='font-light'>
                            Hey there! My name is Siddharth and I build web experiences
                        </p>
                        <p className=' font-light'>
                        🔌 Tech Alchemist: I enjoy experimenting with the latest tools and technologies to craft unique solutions. My toolkit includes not only React and Tailwind CSS, but also the magic of APIs and the power of Axios for real-time data interactions.
                        </p>
                        <p className=' font-light'>
                        🌟 Welcome to my digital playground, where creativity meets code and innovation knows no bounds. Let's collaborate to turn your visions into functional and captivating digital realities.
                        </p>
                        <p className=' font-light'>
                        Passionate about translating ideas into captivating digital realities, I'm a skilled web developer with a creative edge. My journey in the realm of coding has equipped me with a versatile set of skills that breathe life into websites and applications.
                        </p>                        
                    </div>
                    <div className='relative aspect-video my-auto rounded-lg w-full h-full'>
                        <img className='rounded-lg mix-blend-luminosity' src="https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=456&q=80" alt="avatar" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About
import React from 'react'
import {AiOutlineGithub } from 'react-icons/ai'
import {FiExternalLink } from 'react-icons/fi'

const Projects = () => {

    // const image = 'https://images.unsplash.com/photo-1563986768817-257bf91c5753?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1210&q=80'

    const projects = [
        {
            title: 'Portfolio',
            description:
            'An interactive portfolio to showcase my work and contact details for potential employers',
            techStack: ['ReactJS', 'Tailwind'],
            github: 'https://github.com/Go-groot/Siddharth_Portfolio',
            link: 'https://siddharth-portfolio-two.vercel.app/',
            image:'https://media.discordapp.net/attachments/1086640840945975350/1138871432256962682/porfolio.png?width=1422&height=701'
        },
        {
            title: 'Crypto-Watcher',
            description:
            'An API Based Crypto App that Fetches Realtime bitcoin data from CoinGecko provider and Displayes it using charts',
            techStack: ['ReactJS', 'Tailwind', 'Chakra UI','APIs','Fetching'],
            github: 'https://github.com/Go-groot/CryptoWatcher',
            link:'https://crypto-watcher-indol.vercel.app/',
            image:'https://media.discordapp.net/attachments/1086640840945975350/1138871157307748505/crypto.png?width=1440&height=695'
        },
        {
            title: 'Pokeverse',
            description:'Pokemon API data organized in a beautiful UI. Dynamic routes. Sleek animations.',
            techStack: ['ReactJS', 'Tailwind', 'Pokemon API'],
            github: 'https://github.com/Go-groot/Pokeverse',
            link: 'https://pokeverse-hlnqef1a9-go-groot.vercel.app/',
            image:'https://media.discordapp.net/attachments/1086640840945975350/1138871326430478407/pokemon.png?width=1440&height=696'
        },
    ]   

  return (
    <section id='project' className='min-h-[800px] sm:h-full w-full bg-[#0B192E] px-[2rem] sm:px-[5%] lg:px-[15%]'>
        <div className='flex flex-col min-h-screen justify-center  py-40'>
            <div className='flex flex-row gap-3 flex-nowrap whitespace-nowrap items-center pb-6 tracking-tight'>
                <div className={`text-[#05BFDB] text-lg font-mont`}>.03</div>
                <div className={`text-gray-400 font-bold font-mont text-2xl`}>Things I've Built</div>
                <div className={`w-[50%] justify-center items-center h-[1px] bg-[#05BFDB]/10`}></div>
            </div>  
            {/* Mobile Screens */}
            <div className='flex md:hidden flex-col py-3 gap-24'>
                {
                    projects.map((project,i) =>(
                        <div key={i} className='flex flex-col text-white'>
                            <div className='py-4'>
                                <div className='flex flex-col gap-4 h-[80%] w-full'>
                                    <div className='text-[#05BFDB] text-sm font-mont'>Featured Projects</div>
                                    <div className='whitespace-nowrap my-3 text-gray-200 font-bold leading-tight font-sans text-2xl'>
                                        {project.title}
                                    </div>
                                </div>
                                <div className='relative aspect-video z-3 rounded-xl'>
                                    <a href={project.link} target='_blank'>
                                        <img src={project.image} alt={project.title} />
                                    </a>
                                </div>
                                <div className='text-gray-400 text-base font-mont my-5 w-full z-20 bg-[#011f38] p-6 aspect-1/5 rounded-md shadow-md shadow-black/70 leading-relaxed tracking-[.01rem]'>
                                    {project.description}
                                </div>
                                <ul className='flex flex-row gap-5 font-mont text-gray-400 text-sm z-4'>
                                    {
                                        project.techStack.map((tech,i)=>(
                                            <li key={i}>{tech}</li>
                                        ))
                                    }
                                </ul>
                                <div className='flex flex-row gap-6'>
                                    {
                                        project.github ? (
                                            <a href={project.github} className='text-gray-200 my-3' aria-label='GitHub' title='GitHub' target='_blank'>
                                                <AiOutlineGithub className='h-[20px] w-[20px]'/>
                                            </a>
                                        ):null
                                    }
                                    {
                                        project.link ? (
                                            <a href={project.link} className='text-gray-200 my-3' aria-label='GitHub' title='GitHub' target='_blank'>
                                            <FiExternalLink className='h-[20px] w-[20px]'/>
                                        </a>
                                        ):null
                                    }
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            {/* desktop Screens */}
            <div className='hidden md:flex flex-col gap-24 mt-5'>
                {
                    projects.map((project,i) =>(
                        <div className='flex flex-col lg:grid lg:grid-cols-10 text-white'>
                            {i%2 !== 0 ? (
                                <div className='relative col-span-6 aspect-video z-3 rounded-xl'>
                                    <div className='bg-[#05BFDB] h-full w-full rounded-xl'>
                                        <a href={project.link} target='_blank'>
                                            <img src={project.image} alt='image' className='h-full  w-full hover:translate-x-2 hover:translate-y-2 transition ease-in-out rounded-lg'/>
                                        </a>                                    
                                    </div>                                    
                                </div>
                            ) :null
                            }
                            <div className={`py-4 col-span-4 ${i%2!== 0? 'items-end':'items-start'}`}>
                                <div className={`flex flex-col gap-4 ${i%2!== 0? 'items-end':'items-start'} h-[80%] w-full`}>
                                    <div className={`flex flex-col gap-1 ${i%2!== 0? 'items-end':'items-start'}`}>
                                        <div className='text-[#05BFDB] text-sm font-mont'>Featured Projects</div>
                                        <div className='whitespace-nowrap my-3 text-gray-200 font-bold leading-tight font-sans text-2xl'>
                                            {project.title}
                                        </div>
                                    </div>
                                    {i%2 !== 0 ? (
                                        <div className='relative col-span-6 aspect-video z-3 rounded-xl'>
                                            <a href='/' target='_blank'>
                                                <img src={project.image} alt='image' fill className='absolute hover:translate-x-2 hover:translate-y-2 transition ease-in-out rounded-lg'/>
                                            </a>
                                            <div className='bg-[#05BFDB] h-full w-full rounded-xl' />                                    
                                        </div>
                                    ) :null
                                    }
                                    <div className={`text-gray-400 text-base font-mont w-full lg:w-[110%] ${i % 2 !== 0 ? 'text-right' : 'text-left'} z-20 bg-[#011f38] p-6 aspect-4/5 rounded-md shadow-md shadow-black/70 leading-relaxed tracking-[.01rem]`}>
                                        {project.description}                                        
                                    </div>
                                    <ul className='flex flex-row gap-5 font-mont text-gray-400 text-sm z-4'>
                                        {
                                            project.techStack.map((tech,i)=>(
                                                <li key={i}>{tech}</li>
                                            ))
                                        }
                                    </ul>
                                    <div className='flex flex-row gap-6'>
                                        {
                                            project.github ? (
                                                <a href={project.github} className='text-gray-200 my-3' aria-label='GitHub' title='GitHub' target='_blank'>
                                                    <AiOutlineGithub className='h-[20px] w-[20px]'/>
                                                </a>
                                            ):null
                                        }
                                        {
                                            project.link ? (
                                                <a href={project.link} className='text-gray-200 my-3' aria-label='GitHub' title='GitHub' target='_blank'>
                                                <FiExternalLink className='h-[20px] w-[20px]'/>
                                            </a>
                                            ):null
                                        }
                                    </div>
                                </div>
                            </div>
                            {i%2 === 0 ? (
                                <div className='relative col-span-6 aspect-video z-3 rounded-xl'>
                                    <div className='bg-[#05BFDB] h-full w-full rounded-xl'>
                                        <a href={project.link} target='_blank'>
                                            <img src={project.image} alt='image' className='h-full w-full hover:-translate-x-2 hover:-translate-y-2 transition ease-in-out rounded-lg'/>
                                        </a>                                    
                                    </div>                                    
                                </div>
                            ):null}
                        </div>
                    ))
                }

            </div>
        </div>
    </section>
  )
}

export default Projects

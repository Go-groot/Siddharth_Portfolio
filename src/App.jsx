import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Navabar from './components/Navabar'
import Projects from './components/Projects'
import SocialBar from './components/SocialBar'
import EmailSideBar from './components/EmailSidebar'

function App() {

  return (
    <>
      <Navabar/>
      <SocialBar /> 
      <EmailSideBar />
      <Hero /> 
      <About />
      <Projects />
      <Contact />
    </>
  )
}

export default App

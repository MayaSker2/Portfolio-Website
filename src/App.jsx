import './App.css'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import TechnicalProficiency from './sections/TechnicalProficiency'
import AboutMe from './sections/AboutMe'
import MyProjects from './sections/MyProjects'
import ContactMe from './sections/ContactMe'
import Footer from './sections/Footer'
import Snow from './utils/Snow'
function App() {

  return (
    <div className=''>
      {/* <Snow /> */}
      <Navbar />
      <Hero />
      <TechnicalProficiency/>
      <AboutMe/>
      <MyProjects/>
      <ContactMe/>
      <Footer/>
    </div>
  )
}

export default App

import './App.css'
import AboutSection from './components/AboutSection'
import Footer from './components/Footer'
import HomeSection from './components/HomeSection'
import Navbar from './components/Navbar'
import ProjectsSection from './components/ProjectsSection'

function App() {

  return (
    <div>
      <Navbar />
      <HomeSection />
      <AboutSection />
      <ProjectsSection />
      <Footer />
    </div>
  )
}

export default App

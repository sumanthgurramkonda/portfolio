import styles from './App.module.css'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Contactme from './components/contact/Contactme'
import Experience from './components/experience/Experience'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Project from './components/project/Project'
import Skills from './components/skills/Skills'

function App() {
  
  return (
      <div className={styles.app}>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Project />
        <Contact />
        <Contactme />
      </div>
  )
}

export default App

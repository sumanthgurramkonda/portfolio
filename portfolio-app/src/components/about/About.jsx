import React from 'react'
import styles from './About.module.css'

const About = () => {
  return (
    <section id='about' className={styles.container}>
        <h2>About</h2>
        <div className={styles.aboutItems}>
            <div>
                 <h3>Frontend Developer</h3>
                 <p>I am a Frontend developer with experience in building responsive and optimised website</p>
            </div>
            <div>
                <h3>Backend Developer</h3>
                <p>I am a backend developer. I am Experienced in building fast, optimised and secured Web APIs</p>
            </div>
        </div>
    </section>
  )
}

export default About

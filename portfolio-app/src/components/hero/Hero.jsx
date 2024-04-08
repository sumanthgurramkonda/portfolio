import React from 'react'
import styles from './Hero.module.css'
import { getImageUrl } from '../../utils'

const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h2>Hi, I'm Sumanth</h2>
            <p>I am a fullstack web developer with 1 year experience using React and SpringBoot</p>
        </div>
        <img className={styles.heroImg} src={getImageUrl("hero/heroImage.png")} alt="" />
    </section>
  )
}

export default Hero

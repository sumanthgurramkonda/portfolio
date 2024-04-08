import React from 'react'
import styles from './Contact.module.css'

const Contact = () => {
  return (
    <>
        <div className={styles.margin}></div>   
        <section id='contact' className={styles.container}>
                <div>
                    <h3>Contact me &#8595;</h3>
                </div>
                <div className={styles.conacts}>
                    <div>
                        <a href="mailto:sumanthgurramkonda04052001@gmail.com" target='blank'>mail</a>
                        <a href="https://www.linkedin.com/in/sumanth-gurramkonda-739570174/" target='blank'>linkedin</a>
                        <a href="https://github.com/sumanthgurramkonda" target='blank'>github</a>
                    </div>
                </div>
        </section>
    </>
  )
}
export default Contact

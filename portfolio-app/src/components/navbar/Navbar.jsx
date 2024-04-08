import React, { useState } from 'react'
import styles from './Navbar.module.css'
import {getImageUrl} from '../../utils'
import navbar from '../../data/Navbar.json'

const Navbar = () => {
    const [menuOpen,setMenuOpen] = useState(false)
    const setMenubutton =(menuOpen)=>setMenuOpen(menuOpen)

  return (
    <nav className={styles.navbar}>
        <a href="/">Sumanth .G</a>
        <div className={styles.menu}>
            <img className={styles.menuBtn} 
                 src={getImageUrl(`${ menuOpen?'navbar/closeIcon.png':'navbar/menuIcon.png'}`)} 
                 alt="menu Icon" 
                 onClick={()=>setMenubutton(!menuOpen)}/>
            <ul className={menuOpen ? styles.menuItems : styles.menuItems1}>{
                navbar.map((navigator,id)=>
                    <li key={id}>
                        <a onClick={()=>setMenubutton(!menuOpen)} href={`#${navigator.toLowerCase()}`}>{navigator}</a>
                    </li>
                )
                }</ul>
        </div>
    </nav>
  )
}

export default Navbar

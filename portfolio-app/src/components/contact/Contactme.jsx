import React from 'react'
import styles from "./Contactme.module.css"
import contacts from '../../data/contactme.json'
import { getImageUrl } from '../../utils'

const Contactme = () => {
  return (
    
    <section className={styles.container}>{
        contacts.map((contact,id)=>
             <a href={contact.href}  key={id} target='blanck'>
                 <img src={getImageUrl(contact.icon)} alt="contactme Image" />
             </a>
        )
    }</section>
  )
}

export default Contactme

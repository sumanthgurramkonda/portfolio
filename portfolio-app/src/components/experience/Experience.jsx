import React from 'react'
import styles from './Experience.module.css'
import experiences from '../../data/experience.json'
import { getImageUrl } from '../../utils'

const Experience = () => {
  return (
    <section id='experience' className={styles.container}> 
        <h2>Experience</h2>
    {   
        experiences.map((experience, id)=>
           <div key={id}>
               <div className={styles.organisationImg}>
                  <img src={getImageUrl(experience.imageSrc)} alt={experience.organisation} />
               </div>
               <div className={styles.contents}>
                    <h2>{experience.role} {experience.organisation}</h2>
                    <p>{experience.startDate}, {experience.endDate}</p>
                    <ul>{
                        experience.experiences.map((exp,id)=>
                            <li key={id}>{exp}</li>
                        )
                        }</ul>
                    <ul>({
                        experience.skills.map((skill,id)=>
                            <li key={id}>{skill}</li>
                        )
                        })</ul>
               </div>
           </div>    
        )
    }
</section>
  )
}

export default Experience

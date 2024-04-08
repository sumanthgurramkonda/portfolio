import React from 'react'
import styles from './Skills.module.css'
import skills from '../../data/skills.json'
import { getImageUrl } from '../../utils'
import Skill from './Skill'
const Skills = () => {
  return (
    <section id='skills' className={styles.container}>
      <h3>Skills</h3>
          <div className={styles.skills}>
              <Skill  skills={skills[0]} />
              <Skill  skills={skills[1]} />
          </div>
    </section>
  )
}

export default Skills

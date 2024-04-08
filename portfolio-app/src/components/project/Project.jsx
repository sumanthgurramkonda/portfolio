import React from 'react'
import styles from './Project.module.css'
import projects from '../../data/projects.json'
import { getImageUrl } from '../../utils'

const Project = () => {
  return (
    <section>
        <h2>Projects</h2>
        <div id='projects' className={styles.container}>
            {
                projects.map((project,id)=>
                    <div key={id} className={styles.project}>
                        <img src={getImageUrl(project.imageSrc)} alt={project.title} />
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                        <div>{
                            project.skills.map((skill,id)=>
                                <ul key={id}>
                                    <li key={id}>{skill}</li>
                                </ul>
                            )
                            }</div>
                        <div>
                            <a href={project.demo} target='blank'>Demo</a>
                            <a href={project.source}target='blank'>Source</a>
                        </div>
                    </div>
                )
            }
        </div>
    </section>
  )
}

export default Project

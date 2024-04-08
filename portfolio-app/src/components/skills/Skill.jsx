import React from 'react'
import { getImageUrl } from '../../utils'

const Skill = ({skills}) => {
  return (
    <div >
        <h3>{skills.title}</h3>
        <div>
            {
                skills.skills.map((skill,id)=>
                    <div  key={id}>
                        <img src={getImageUrl(skill)} alt={skills.title} />
                    </div>
                
                )
            }
        </div>
    </div>
  )
}

export default Skill

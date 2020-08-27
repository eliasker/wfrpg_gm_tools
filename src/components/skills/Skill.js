import React, { useState } from 'react'

const Skill = ({ skill }) => {
  const [expanded, setExpanded] = useState(false)

  const toggleExpanded = () => setExpanded(!expanded)
  const mapDesc = (array) => array.map(child => <p key={child}>{child}</p>)

  return (
    <div>
      <h3 className='pointer' onClick={() => toggleExpanded()}>{skill.name}</h3>
      {expanded ?
        <div>
          {mapDesc(skill.desc)}
          <p>{skill.example}</p>
          <p>{skill.options}</p>
          <p>{skill.specialisations}</p>
        </div>
        :
        null
      }
    </div>
  )
}

export default Skill
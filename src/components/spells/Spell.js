import React, { useState } from 'react'

const Spell = ({ spell }) => {
  const [expanded, setExpanded] = useState(false)

  const toggleExpanded = () => setExpanded(!expanded)

  return (
    <div className={`color-${spell.lore}`}>
      <h4 className='clickable' onClick={() => toggleExpanded()}>{spell.name}</h4>
      {expanded ?
        <div>
          <p>{spell.CN}</p>
          <p>{spell.range}</p>
          <p>{spell.target}</p>
          <p>{spell.duration}</p>
          <p>{spell.desc}</p>
        </div>
        : null
      }
    </div>
  )
}

export default Spell
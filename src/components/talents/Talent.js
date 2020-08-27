import React, { useState } from 'react'

const Talent = ({ talent }) => {
  const [expanded, setExpanded] = useState(false)

  const toggleExpanded = () => setExpanded(!expanded)
  
  return (
    <div>
      <h3 className='pointer' onClick={() => toggleExpanded()}>{talent.name}</h3>
      {expanded ?
        <div>
          <p>{talent.max}</p>
          <p>{talent.tests}</p>
          <p>{talent.desc}</p>
        </div> : null
      }
    </div>
  )

}

export default Talent
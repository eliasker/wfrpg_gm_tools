import React, { useState } from 'react'
import AddToFavorites from '../generic/AddToFavorites'

const Talent = ({ talent }) => {
  const [expanded, setExpanded] = useState(false)

  const toggleExpanded = () => setExpanded(!expanded)

  return (
    <div>
      <header className='icon-header-row-container'>
        <div className=''>
          <h4 className='clickable' onClick={() => toggleExpanded()}>{talent.name}</h4>
        </div>

        <div className='icon'>
          <AddToFavorites />
        </div>
      </header>

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

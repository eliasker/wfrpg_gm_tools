import React, { useState } from 'react'
import AddToFavorites from '../generic/AddToFavorites'

const Talent = ({ talent }) => {
  const [expanded, setExpanded] = useState(false)

  const toggleExpanded = () => setExpanded(!expanded)

  return (
    <div>
      <div>
        <h4 className='clickable' onClick={() => toggleExpanded()}>{talent.name}</h4>
        {
          // TODO: style & function
          /*
        <div className='inline-div-left'>
          <h4 className='clickable' onClick={() => toggleExpanded()}>{talent.name}</h4>
        </div>
        
        <div className='inline-div-right'>
          <AddToFavorites />
        </div>
        */
        }
      </div>
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
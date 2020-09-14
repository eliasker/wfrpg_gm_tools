import React, { useState } from 'react'
import AddToFavorites from '../generic/AddToFavorites'

import expandIcon from '../../assets/expand_icon.svg'
import collapseIcon from '../../assets/collapse_icon.svg'

const Talent = ({ talent, addToFavs, removeFromFavs }) => {
  const [expanded, setExpanded] = useState(false)

  const toggleExpanded = () => setExpanded(!expanded)

  return (
    <div>
      <header className='icon-header-row-container'>
        <div className='icon-header-row-container'>
          <div className='icon-before'>
            {expanded ?
              <img className='clickable icon' src={collapseIcon} alt='collapse icon' onClick={() => toggleExpanded()} />
              :
              <img className='clickable icon' src={expandIcon} alt='expand icon' onClick={() => toggleExpanded()} />
            }
          </div>
          <h4 className='clickable' onClick={() => toggleExpanded()}>{talent.name}</h4>
        </div>

        <div className='icon'>
          <AddToFavorites child={talent} addToFavs={addToFavs} removeFromFavs={removeFromFavs} />
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

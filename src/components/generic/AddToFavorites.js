import React, { useState } from 'react'

import addIcon from '../../assets/add_icon.svg'
import removeIcon from '../../assets/remove_icon.svg'

// TODO: pin -icon better?
const AddToFavorites = ({ child, addToFavs, removeFromFavs }) => {
  const [added, setAdded] = useState(false)

  const toggleAdded = () => {
    added ? removeFromFavs(child) : addToFavs(child)
    setAdded(!added)
  }

  return !added ?
    <img className='clickable icon' src={addIcon} alt='add icon' onClick={() => toggleAdded()} />
    :
    <img className='clickable icon' src={removeIcon} alt='remove icon' onClick={() => toggleAdded()} />
}

export default AddToFavorites

import React, { useState } from 'react'

import addIcon from '../../assets/add_icon.svg'
import removeIcon from '../../assets/remove_icon.svg'

// TODO: pin -icon better?
const AddToFavorites = () => {
  const [added, setAdded] = useState(false)

  const toggleAdded = () => setAdded(!added)

  return !added ?
    <img className='clickable' src={addIcon} alt='add icon' onClick={() => toggleAdded()} />
    :
    <img className='clickable' src={removeIcon} alt='remove icon' onClick={() => toggleAdded()} />
}

export default AddToFavorites

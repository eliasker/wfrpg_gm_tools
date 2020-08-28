import React, { useState } from 'react'

import addIcon from '../../assets/add_icon.svg'
import removeIcon from '../../assets/remove_icon.svg'

const AddToFavorites = () => {
  const [added, setAdded] = useState(false)

  const toggleAdded = () => setAdded(!added)

  return (
    <div>
      {!added ?
        <img src={addIcon} alt='add icon' onClick={() => toggleAdded()}/>
        :
        <img src={removeIcon} alt='remove icon' onClick={() => toggleAdded()}/>
      }
    </div>
  )
}

/*
      {!added ?
        <button onClick={() => toggleAdded()}><img src={addIcon} alt='add icon' /></button>
        :
        <button onClick={() => toggleAdded()}><img src={removeIcon} alt='remove icon' /></button>
      }


*/

export default AddToFavorites

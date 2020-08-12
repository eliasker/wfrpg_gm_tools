import React, { useState } from 'react'
import HitLocation from './combat/HitLocation'

const Rules = () => {
  const [current, setCurrent] = useState(null)
  const showContent = (name) => current === name ? setCurrent(null) : setCurrent(name)

  const Combat = () => (
    <HitLocation />
  )

  return (
    <div>
      <h3>General rules & tables here</h3>
      <ul className='pointer'>
        <li onClick={() => showContent('combat')}>Combat</li>
        {current === 'combat' ? <Combat /> : null}
        <li>Magic</li>
        <li>Prayers</li>
        <li>etc</li>
      </ul>
    </div>
  )
}

export default Rules
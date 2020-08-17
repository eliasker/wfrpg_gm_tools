import React, { useState } from 'react'
import HitLocation from './combat/HitLocation'
import useContent from '../../hooks/useContent'
import Talents from './Talents'

const Rules = () => {
  const [current, showCurrent] = useContent()

  const Combat = () => (
    <HitLocation />
  )

  return (
    <div>
      <h3>General rules & tables here</h3>
      <ul className='pointer'>
        <li onClick={() => showCurrent('combat')}>Combat</li>
        {current === 'combat' ? <Combat /> : null}
        <li onClick={() => showCurrent('talents')}>Talents</li>
        {current === 'talents' ? <Talents /> : null}
        <li>Magic</li>
        <li>Prayers</li>
        <li>etc</li>
      </ul>
    </div>
  )
}

export default Rules
import React, { useState } from 'react'
import HitLocation from './combat/HitLocation'
import useContent from '../../hooks/useContent'
import Talents from './Talents'
import Skills from './Skills'

const Rules = () => {
  const [current, showCurrent] = useContent()

  const Combat = () => (
    <HitLocation />
  )

  return (
    <div>
      <ul>
        <li className='pointer' onClick={() => showCurrent('combat')}>Combat</li>
        {current === 'combat' ? <Combat /> : null}
        <li className='pointer' onClick={() => showCurrent('talents')}>Talents</li>
        {current === 'talents' ? <Talents /> : null}
        <li className='pointer' onClick={() => showCurrent('skills')}>Skills</li>
        {current === 'skills' ? <Skills /> : null}
        <li>Magic</li>
        <li>Prayers</li>
      </ul>
    </div>
  )
}

export default Rules
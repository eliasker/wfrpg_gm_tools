import React from 'react'
import HitLocation from './combat/HitLocation'
import useContent from '../../hooks/useContent'
import Talents from './Talents'
import Skills from './Skills'
import Spells from './Spells'

const Rules = () => {
  const [current, showCurrent] = useContent()

  const Combat = () => (
    <HitLocation />
  )

  const getCurrentContent = () => {
    switch (current) {
      case 'combat': return <Combat />
      case 'talents': return <Talents />
      case 'skills': return <Skills />
      case 'spells': return <Spells />
      case 'prayers': return <p>Prayers todo</p>
      default: return null
    }
  }
  return (
    <div>
      <ul>
        <li className='pointer' onClick={() => showCurrent('combat')}>Combat</li>
        <li className='pointer' onClick={() => showCurrent('talents')}>Talents</li>
        <li className='pointer' onClick={() => showCurrent('skills')}>Skills</li>
        <li className='pointer' onClick={() => showCurrent('spells')}>Spells</li>
        <li className='pointer' onClick={() => showCurrent('prayers')}>Prayers</li>
      </ul>
      <div>
        {getCurrentContent()}
      </div>
    </div>
  )
}

export default Rules
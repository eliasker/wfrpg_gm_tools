import React from 'react'
import HitLocation from './combat/HitLocation'
import useContent from '../../hooks/useContent'
import Talents from './Talents'
import Skills from './Skills'
import Spells from './Spells'

// TODO: Rename this component
const Rules = () => {
  const [current, showCurrent] = useContent()

  // TODO: Move this elsewhere
  const Combat = () => (
    <HitLocation />
  )

  const options = ['Combat', 'Talents', 'Skills', 'Spells', 'Prayers']

  const getCurrentContent = () => {
    switch (current) {
      case 'Combat': return <Combat />
      case 'Talents': return <Talents />
      case 'Skills': return <Skills />
      case 'Spells': return <Spells />
      case 'Prayers': return <p>Prayers todo</p>
      default: return null
    }
  }

  const mapOptions = () => options.map(o => <li className='clickable' onClick={() => showCurrent(o)} key={o}>{o}</li>)

  return (
    <div>
      <ul>
        {mapOptions()}
      </ul>
      <div>
        {getCurrentContent()}
      </div>
    </div>
  )
}

export default Rules
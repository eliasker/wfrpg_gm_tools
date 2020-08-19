import React from 'react'
import useContent from '../../hooks/useContent'
import NPC from './NPC'

const World = () => {
  const [current, showCurrent] = useContent()

  const NPCs = () => (
    <div>
      <p>filterable (by tags) npcs here</p>
      <p>Current example npc</p>
      <NPC />
    </div>
  )

  const Events = () => (
    <div>
      <p>random & planned events</p>
    </div>
  )

  const Maps = () => (
    <div>
      <p>filterable maps here</p>
    </div>
  )

  const Content = () => {
    switch (current) {
      case null:
        return null
      case 'npcs':
        return (
          <NPCs />
        )
      case 'events':
        return (
          <Events />
        )
      case 'maps':
        return (
          <Maps />
        )
      default:
        break;
    }
  }

  return (
    <div>
      <h3>World / GM page</h3>
      <p onClick={() => showCurrent('npcs')}>npcs</p>
      <p onClick={() => showCurrent('events')}>events</p>
      <p onClick={() => showCurrent('maps')}>maps</p>
      <Content />
    </div>
  )
}
export default World
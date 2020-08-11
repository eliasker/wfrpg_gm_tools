import React, { useState } from 'react'

const World = () => {
  const [current, setCurrent] = useState(null)
  const showContent = (name) => current === name ? setCurrent(null) : setCurrent(name)

  const NPCs = () => (
    <div>
      <p>filterable (by tags) npcs here</p>
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
      <p onClick={() => showContent('npcs')}>npcs</p>
      <p onClick={() => showContent('events')}>events</p>
      <p onClick={() => showContent('maps')}>maps</p>
      <Content />
    </div>
  )
}
export default World
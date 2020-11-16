import React, { useState } from 'react'

const Spell = ({ spell }) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className={`color-${spell.lore} spell`}>
      <div className="item-header-container">
        <h4 onClick={() => setExpanded(!expanded)}
          className="clickable">{spell.name}</h4>
      </div>
      {expanded ?
        <>
          <p>{spell.CN}</p>
          <p>{spell.range}</p>
          <p>{spell.target}</p>
          <p>{spell.duration}</p>
          <p>{spell.desc}</p>
        </>
        : null}
    </div>
  )
}

export default Spell

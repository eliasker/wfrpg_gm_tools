import React, { useState } from 'react'
import Spell from './Spell';

const SpellGroupList = ({ groups, searchInput }) => {

  const mapFilteredSpells = (spells) => spells.map(spell => {
    return (
      spell.name.toLowerCase().includes(searchInput.toLowerCase()) ?
        <Spell spell={spell} key={spell.name} />
        :
        null
    )
  })

  const Group = ({ group }) => {
    const [showDesc, setShowDesc] = useState(false);
    const lore = group.spells[0].lore
    return (
      group.name.toLowerCase().includes(searchInput.toLowerCase()) ?
        <div className={`spell-group-container color-${lore} bg-darker`}>
          <h4 className="item-header-container clickable"
            onClick={() => setShowDesc(!showDesc)}>
            {group.name}
          </h4>
          {showDesc ?
            <>
              <p>{group.desc}</p>
              <p>{group.ingredients}</p>
            </> : null
          }
          {group.spells.map(spell => <Spell spell={spell} key={spell.name} />)}
        </div>
        :
        mapFilteredSpells(group.spells)
    )
  }

  return (
    <>
      <h4>Spells: </h4>
      <div className="spellgroup-container">
        {groups.map(group => <Group group={group} key={group.name} />)}
      </div>
    </>
  )
}

export default SpellGroupList

import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import { spellGroupState } from '../../recoil/atoms'
import { replaceItemAtIndex } from '../../util/arrayUtils'

// TODO:FIXME: toggle expand on h4 is applied also when selecting
const Spell = ({ spell }) => {
  const [spellGroups, setSpellGroups] = useRecoilState(spellGroupState)
  const [expanded, setExpanded] = useState(false)

  const toggleSelected = () => {
    const foundGroup = spellGroups.find(group => group.spells.some(target => target.id === spell.id))
    const spellIndex = foundGroup.spells.findIndex(target => target.id === spell.id)
    const groupIndex = spellGroups.findIndex(group => foundGroup.name === group.name)
    const newSpells = replaceItemAtIndex(foundGroup.spells, spellIndex, {
      ...spell,
      isSelected: !spell.isSelected,
    })
    const newGroups = replaceItemAtIndex(spellGroups, groupIndex, {
      ...foundGroup,
      spells: newSpells,
    })

    setSpellGroups(newGroups)
  }

  return (
    <div className={`color-${spell.lore} spell`}>
      <div className="item-header-container">
        <h4 onClick={() => setExpanded(!expanded)}
          className="clickable">{spell.name}</h4>
        <input
          type="checkbox"
          checked={spell.isSelected}
          onChange={toggleSelected}
        />
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

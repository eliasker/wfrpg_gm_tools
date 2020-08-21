import React from 'react'

const spellGroups = require('../../data/spells.json')


// TODO: filter spells by school
// TODO: filter spells by name
// TODO: CSS for spell groups
// TODO: CSS for spells
// TODO: Spell component & Spell group component to separate file?
const Spells = () => {
  const Group = ({group}) => {
    return (
      <div>
        <h3>{group.name}</h3>
        <p>{group.desc}</p>
        <p>{group.ingredients}</p>
        {mapSpells(group.spells)}
      </div>
    )
  }

  const Spell = ({spell}) => {
    return (
      <div>
        <h3>{spell.name}</h3>
        <p>{spell.CN}</p>
        <p>{spell.range}</p>
        <p>{spell.target}</p>
        <p>{spell.duration}</p>
        <p>{spell.desc}</p>
      </div>
    )
  }

  const mapSpells = (spells) => spells.map(spell => <Spell spell={spell} key={spell.name}/>)
  const mapSpellGroups = () => spellGroups.groups.map(group => <Group group={group} key={group.name}/>)

  return (
    <div>
      <p>name filter here</p>
      <p>select school of magic here</p>
      {mapSpellGroups()}
    </div>
  )
}

export default Spells
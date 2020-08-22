import React, { useState } from 'react'
import SearchForm from '../generic/SearchForm'

const spellGroups = require('../../data/spells.json')

// TODO: selecting school of magic
// TODO: CSS for spell groups
// TODO: CSS for spells
// TODO: Spell component & Spell group component to separate file?
const Spells = () => {
  const [searchInput, setSearchInput] = useState('')

  const Group = ({ group }) =>
    group.name.toLowerCase().includes(searchInput.toLowerCase()) ?
      <div>
        <h3>{group.name}</h3>
        <p>{group.desc}</p>
        <p>{group.ingredients}</p>
        {mapAllSpells(group.spells)}
      </div>
      :
      mapSpells(group.spells)

  const Spell = ({ spell }) => 
      <div>
        <h3>{spell.name}</h3>
        <p>{spell.CN}</p>
        <p>{spell.range}</p>
        <p>{spell.target}</p>
        <p>{spell.duration}</p>
        <p>{spell.desc}</p>
      </div>

  const mapAllSpells = (spells) => spells.map(spell => <Spell spell={spell} key={spell.name} />)
  
  const mapSpells = (spells) => spells.map(spell =>
    spell.name.toLowerCase().includes(searchInput.toLowerCase()) ?
      <Spell spell={spell} key={spell.name} />
      : null)
  
      const mapSpellGroups = () => spellGroups.groups.map(group => <Group group={group} key={group.name} />)

  return (
    <div>
      <SearchForm
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        placeholder='Search Spells by name'
      />
      {mapSpellGroups()}
    </div>
  )
}

export default Spells
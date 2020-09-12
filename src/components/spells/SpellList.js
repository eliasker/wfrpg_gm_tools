import React, { useState } from 'react'
import SearchForm from '../generic/SearchForm'

import Spell from './Spell'

// TODO: selecting school of magic
// TODO: CSS for spell groups
// TODO: CSS for spells
const Spells = ({ spellsByGroup }) => {
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

  const mapAllSpells = (spells) => spells.map(spell => <Spell spell={spell} key={spell.name} />)

  const mapSpells = (spells) => spells.map(spell =>
    spell.name.toLowerCase().includes(searchInput.toLowerCase()) ?
      <Spell spell={spell} key={spell.name} />
      : null)

  const mapSpellGroups = () => spellsByGroup.groups.map(group => <Group group={group} key={group.name} />)

  return (
    <div>
      <SearchForm
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        placeholder='Filter Spells by name'
      />
      {mapSpellGroups()}
    </div>
  )
}

export default Spells

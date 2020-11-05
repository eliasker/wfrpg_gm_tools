import React, { useState } from 'react'
import { useRecoilValue } from 'recoil'

import { spellGroupState } from '../../recoil/atoms'
import SearchForm from '../generic/SearchForm'

// TODO: selecting school of magic
// TODO: CSS for spell groups
// TODO: CSS for spells
// TODO: Spell component & Spell group component to separate file?
const Spells = () => {
  const spellGroups = useRecoilValue(spellGroupState)
  const [searchInput, setSearchInput] = useState('')

  const Group = ({ group }) =>
    group.name.toLowerCase().includes(searchInput.toLowerCase()) ?
      <div>
        <h4>{group.name}</h4>
        <p>{group.desc}</p>
        <p>{group.ingredients}</p>
        {mapAllSpells(group.spells)}
      </div>
      :
      mapSpells(group.spells)

  const Spell = ({ spell }) => {
    const [expanded, setExpanded] = useState(false)
    return (
      <div className="item-container">
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

  const mapAllSpells = (spells) => spells.map(spell =>
    <Spell spell={spell} key={spell.name} />)

  const mapSpells = (spells) => spells.map(spell =>
    spell.name.toLowerCase().includes(searchInput.toLowerCase()) ?
      <Spell spell={spell} key={spell.name} />
      : null)

  const mapSpellGroups = () => spellGroups.map(group => <Group group={group} key={group.name} />)

  return (
    <div className="content-container">
      <SearchForm
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        placeholder='Search Spells by name'
      />
      <h4>Spells:</h4>
      {mapSpellGroups()}
    </div>
  )
}

export default Spells

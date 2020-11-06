import React, { useState } from 'react'
import { useRecoilValue } from 'recoil'
import { spellGroupState } from '../../recoil/atoms'
import SearchForm from '../generic/SearchForm'
import Spell from './Spell'

// TODO: add ids to spells.json
// TODO: selecting spells
const SpellsPage = () => {
  const spellGroups = useRecoilValue(spellGroupState)
  const [searchInput, setSearchInput] = useState('')

  const Group = ({ group }) => {
    return (
      group.name.toLowerCase().includes(searchInput.toLowerCase()) ?
        <div className="item-container">
          <h4 className="item-header-container">{group.name}</h4>
          <p>{group.desc}</p>
          <p>{group.ingredients}</p>
          {mapAllSpells(group.spells)}
        </div>
        :
        mapSpells(group.spells)
    )
  }

  const mapAllSpells = (spells) => spells.map(spell => {
    return (
      <Spell spell={spell} key={spell.name} />
    )
  })

  const mapSpells = (spells) => spells.map(spell => {
    return (
      spell.name.toLowerCase().includes(searchInput.toLowerCase()) ?
        <Spell spell={spell} key={spell.name} />
        :
        null
    )
  })

  const mapSpellGroups = () => spellGroups.map(group => {
    return (
      <Group group={group} key={group.name} />
    )
  })

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

export default SpellsPage

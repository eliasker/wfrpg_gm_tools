import React, { useState } from 'react'
import { useRecoilValue } from 'recoil'
import { spellGroupState } from '../../recoil/atoms'
import SearchForm from '../generic/SearchForm'
import Spell from './Spell'

// TODO: add ids to spells.json
// TODO: selecting spells
// TODO: color for arcance spells
const SpellsPage = () => {
  const spellGroups = useRecoilValue(spellGroupState)
  const [searchInput, setSearchInput] = useState('')

  const Group = ({ group }) => {
    const [showDesc, setShowDesc] = useState(false)
    const lore = group.spells[0].lore
    return (
      group.name.toLowerCase().includes(searchInput.toLowerCase()) ?
        <div className={`spell-group-container color-${lore} bg-darker`} >
          <h4 onClick={() => setShowDesc(!showDesc)}
            className="item-header-container clickable">{group.name}
          </h4>
          {showDesc ?
            <>
              <p>{group.desc}</p>
              <p>{group.ingredients}</p>
            </> : null}
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
      <div className="spellgroup-container">
        {mapSpellGroups()}
      </div>
    </div>
  )
}

export default SpellsPage

import React, { useState } from 'react'
import { useRecoilValue } from 'recoil'
import { spellGroupState } from '../../recoil/atoms'
import SearchForm from '../generic/SearchForm'
import GroupList from './SpellGroupList'

// TODO: selecting spells
const SpellsPage = () => {
  const spellGroups = useRecoilValue(spellGroupState)
  const [searchInput, setSearchInput] = useState('')

  return (
    <div className="content-container">
      <SearchForm
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        placeholder='Search Spells by name'
      />
      <GroupList groups={spellGroups} searchInput={searchInput} showOnlySelected={false} />
    </div>
  )
}

export default SpellsPage

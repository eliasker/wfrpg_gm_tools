import React, { useState } from 'react'
import { useRecoilValue } from 'recoil'
import { talentState } from '../../recoil/atoms'

import SearchForm from '../generic/SearchForm'
import TalentList from './TalentList'

const Talents = () => {
  const talentList = useRecoilValue(talentState)
  const [searchInput, setSearchInput] = useState('')

  const filteredTalents = talentList.filter(t =>
    t.name.toLowerCase().includes(searchInput.toLowerCase()))

  return (
    <div className="content-container">
      <SearchForm
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        placeholder='Search Talents by name'
      />
      <TalentList talents={filteredTalents} />
    </div>
  )
}

export default Talents

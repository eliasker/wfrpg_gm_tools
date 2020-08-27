import React, { useState } from 'react'
import SearchForm from '../generic/SearchForm'

import Talent from './Talent'
const talentList = require('../../data/talents.json')

// TODO: Add Table property to Talents.json where needed
const Talents = () => {
  const [searchInput, setSearchInput] = useState('')

  const mapTalents = () => {
    return talentList.talents
      .filter(t => t.name.toLowerCase().includes(searchInput.toLowerCase()))
      .map(tf => <Talent key={tf.id} talent={tf} />)
  }

  return (
    <div>
      <SearchForm
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        placeholder='Search Talents by name'
      />
      {mapTalents()}
    </div>
  )
}

export default Talents
import React, { useState } from 'react'
import SearchForm from '../generic/SearchForm'

import Talent from './Talent'

// TODO: Add Table property to Talents.json where needed
const Talents = ({ talentList, addToFavs, removeFromFavs }) => {
  const [searchInput, setSearchInput] = useState('')

  const mapTalents = () => {
    return talentList
      .filter(t => t.name.toLowerCase().includes(searchInput.toLowerCase()))
      .map(tf => <Talent key={tf.id} talent={tf} addToFavs={addToFavs} removeFromFavs={removeFromFavs} />)
  }

  return (
    <div>
      <SearchForm
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        placeholder='Filter Talents by name'
      />
      {mapTalents()}
    </div>
  )
}

export default Talents

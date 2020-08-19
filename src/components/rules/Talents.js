import React, { useState } from 'react'
import SearchForm from '../generic/SearchForm'

const talentList = require('../../data/talents.json')

// TODO: Remove clickable from parent component
// TODO: Add Table property to Talents.json where needed
const Talents = () => {
  const [searchInput, setSearchInput] = useState('')

  const mapTalents = () => {
    return talentList.talents
      .filter(t => t.name.toLowerCase().includes(searchInput.toLowerCase()))
      .map(tf => {
        return (
          <div key={tf.id}>
            <h3>{tf.name}</h3>
            <p>{tf.max}</p>
            <p>{tf.tests}</p>
            <p>{tf.desc}</p>
          </div>
        )
      })
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
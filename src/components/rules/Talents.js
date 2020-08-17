import React, { useState } from 'react'

import arrayFilter from '../../util/filter'

const talentList = require('../../data/talents.json')

// TODO: Remove clickable from parent component
// TODO: Algorithm optimization (?)
const Talents = () => {
  const [searchInput, setSearchInput] = useState('')

  const mapTalents = () => {
    const filteredTalentNames = arrayFilter(talentList.talents.map(t => t.name), searchInput)

    return talentList.talents
      .filter(t => filteredTalentNames.find(e => t.name === e))
      .map(t => {
        return (
          <div key={t.id}>
            <h3>{t.name}</h3>
            <p>{t.max}</p>
            <p>{t.tests}</p>
            <p>{t.desc}</p>
          </div>
        )
      })
  }

  return (
    <div>
      <form onSubmit={e => e.preventDefault()}>
        <input type='search' placeholder='Search talent name' value={searchInput} onChange={e => setSearchInput(e.target.value)} />
      </form>
      {mapTalents()}
    </div>
  )
}

export default Talents
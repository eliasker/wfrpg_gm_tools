import React, { useState } from 'react'

import SearchForm from '../generic/SearchForm'
const skillList = require('../../data/skills.json')

// TODO: Add Table property to skills.json where needed
const Skills = () => {
  const [searchInput, setSearchInput] = useState('')

  const mapDesc = (array) => array.map(child => <p key={child}>{child}</p>)

  const mapSkills = () => {
    return skillList.skills
      .filter(s => s.name.toLowerCase().includes(searchInput.toLowerCase()))
      .map(sf => {
        return (
          <div key={sf.id}>
            <h3>{sf.name}</h3>
            {mapDesc(sf.desc)}
            <p>{sf.example}</p>
            <p>{sf.options}</p>
            <p>{sf.specialisations}</p>
          </div>
        )
      })
  }
  return (
    <div>
      <SearchForm
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        placeholder='Search Skills by name'
      />
      {mapSkills()}
    </div>
  )
}

export default Skills
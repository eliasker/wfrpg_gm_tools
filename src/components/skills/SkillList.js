import React, { useState } from 'react'

import SearchForm from '../generic/SearchForm'
import Skill from './Skill'
const skillList = require('../../data/skills.json')

// TODO: Add Table property to skills.json where needed
const Skills = () => {
  const [searchInput, setSearchInput] = useState('')

  const mapSkills = () => {
    return skillList.skills
      .filter(s => s.name.toLowerCase().includes(searchInput.toLowerCase()))
      .map(sf => <Skill key={sf.id} skill={sf} />)
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
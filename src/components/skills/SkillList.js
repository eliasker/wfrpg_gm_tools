import React, { useState } from 'react'

import SearchForm from '../generic/SearchForm'
import Skill from './Skill'

// TODO: Add Table property to skills.json where needed
const Skills = ({ skillList }) => {
  const [searchInput, setSearchInput] = useState('')

  const mapSkills = () => {
    return skillList
      .filter(s => s.name.toLowerCase().includes(searchInput.toLowerCase()))
      .map(sf => <Skill key={sf.id} skill={sf} />)
  }

  return (
    <div>
      <SearchForm
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        placeholder='Filter Skills by name'
      />
      {mapSkills()}
    </div>
  )
}

export default Skills

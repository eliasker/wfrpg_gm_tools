import React, { useState } from 'react'
import { useRecoilValue } from 'recoil'
import { skillState } from '../../recoil/atoms'

import SearchForm from '../generic/SearchForm'
import SkillList from './SkillList'

// TODO: Add Table property to skills.json where needed
const Skills = () => {
  const skillList = useRecoilValue(skillState)
  const [searchInput, setSearchInput] = useState('')

  const filteredSkills = skillList.filter(s =>
    s.name.toLowerCase().includes(searchInput.toLowerCase()))

  return (
    <div className="content-container">
      <SearchForm
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        placeholder='Search Skills by name'
      />
      <SkillList skills={filteredSkills} />
    </div>
  )
}

export default Skills

import React, { useState } from 'react'

import arrayFilter from '../../util/filter'
const skillList = require('../../data/skills.json')

const Skills = () => {
  const [searchInput, setSearchInput] = useState('')

  const mapDesc = (array) => array.map(child => <p key={child}>{child}</p>)

  const mapSkills = () => {
    const filteredSkillNames = arrayFilter(skillList.skills.map(s => s.name), searchInput)

    return skillList.skills
      .filter(s => filteredSkillNames.find(e => s.name === e))
      .map(s => {
        return (
          <div key={s.id}>
            <h3>{s.name}</h3>
            {mapDesc(s.desc)}
            <p>{s.example}</p>
            <p>{s.options}</p>
            <p>{s.specialisations}</p>
          </div>
        )
      })
  }
  return (
    <div>
      <form onSubmit={e => e.preventDefault()}>
        <input type='search' placeholder='Search skill name' value={searchInput} onChange={e => setSearchInput(e.target.value)} />
      </form>
      {mapSkills()}
    </div>
  )
}

export default Skills
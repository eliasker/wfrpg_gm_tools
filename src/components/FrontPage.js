import React from 'react'

import { useRecoilValue } from 'recoil'
import { selectedTalents, selectedSkills } from '../recoil/selectors'

import SkillList from './rules/SkillList'
import TalentList from './rules/TalentList'

const FrontPage = () => {
  const talents = useRecoilValue(selectedTalents('Selected'))
  const skills = useRecoilValue(selectedSkills('Selected'))

  return (
    <div>
      <h3>Warhammer Fantasy RPG utilities</h3>
      <h4>Favorites:</h4>
      {talents.length === 0 ?
        <p>No talents selected</p> :
        <TalentList talents={talents} />
      }
      {skills.length === 0 ?
        <p>No skills selected</p> :
        <SkillList skills={skills} />
      }
      <p>Selecting spells in todo :P</p>
    </div>
  )
}

export default FrontPage

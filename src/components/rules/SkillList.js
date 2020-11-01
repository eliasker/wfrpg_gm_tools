import React from 'react'
import Skill from './Skill'

const SkillList = ({ skills }) => {
  return (
    <div>
      {skills.map(s =>
        <Skill skill={s} key={s.id} />
      )}
    </div>
  )
}

export default SkillList

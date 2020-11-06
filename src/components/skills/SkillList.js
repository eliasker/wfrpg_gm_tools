import React from 'react'
import Skill from './Skill'

const SkillList = ({ skills }) => {
  return (
    <div>
      <h4>Skill list:</h4>
      {skills.map(s =>
        <Skill skill={s} key={s.id} />
      )}
    </div>
  )
}

export default SkillList

import React from 'react'
import Skill from './Skill'

const SkillList = ({ skills }) => {
  return (
    <div>
      <h4>Skill list:</h4>
      <div className="columns">
      {skills.map(s =>
        <Skill skill={s} key={s.id} />
      )}
      </div>
    </div>
  )
}

export default SkillList

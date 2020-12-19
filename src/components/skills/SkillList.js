import React from 'react'
import Skill from './Skill'

const SkillList = ({ skills }) => {
  return (
    <>
      <h4>Skill list:</h4>
      <div className="columns">
      {skills.map(s =>
        <Skill skill={s} key={s.id} />
      )}
      </div>
    </>
  )
}

export default SkillList

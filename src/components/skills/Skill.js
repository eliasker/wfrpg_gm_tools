import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import { skillState } from '../../recoil/atoms'
import { replaceItemAtIndex } from '../../util/arrayUtils'

const Skill = ({ skill }) => {
  const [skillList, setSkillList] = useRecoilState(skillState)
  const [expanded, setExpanded] = useState(false)

  const toggleSelected = () => {
    const newList = replaceItemAtIndex(skillList, skill.id, {
      ...skill,
      isSelected: !skill.isSelected,
    })

    setSkillList(newList)
  }

  const mapDesc = (array) => array.map(child =>
    <p key={skill.id + array.indexOf(child)}>{child}</p>)

  return (
    <div className="item-container skill">
      <div className="item-header-container">
        <h4 onClick={() => setExpanded(!expanded)}
          className="clickable">{skill.name}</h4>
        <input
          type="checkbox"
          checked={skill.isSelected}
          onChange={toggleSelected}
        />
      </div>
      {expanded ?
        <>
          {mapDesc(skill.desc)}
          <p>{skill.example}</p>
          <p>{skill.options}</p>
          <p>{skill.specialisations}</p>
        </>
        : null}
    </div>
  )
}

export default Skill

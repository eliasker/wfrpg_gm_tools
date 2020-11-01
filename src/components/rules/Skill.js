import React from 'react'
import { useRecoilState } from 'recoil'
import { skillState } from '../../recoil/atoms'
import { replaceItemAtIndex } from '../../util/arrayUtils'

const Skill = ({ skill }) => {
  const [skillList, setSkillList] = useRecoilState(skillState)

  const toggleSelected = () => {
    const newList = replaceItemAtIndex(skillList, skill.id, {
      ...skill,
      isSelected: !skill.isSelected,
    })

    setSkillList(newList)
  }

  // FIXME: key={child} :DDD
  const mapDesc = (array) => array.map(child =>
    <p key={child}>{child}</p>)

  return (
    <div key={skill.id}>
      <h3>{skill.name}</h3>
      <input type="checkbox"
        checked={skill.isSelected}
        onChange={toggleSelected}
      />
      {mapDesc(skill.desc)}
      <p>{skill.example}</p>
      <p>{skill.options}</p>
      <p>{skill.specialisations}</p>
    </div>
  )
}

export default Skill

import React from 'react'
import { useRecoilState } from 'recoil'
import { talentState } from '../../recoil/atoms'
import { replaceItemAtIndex } from '../../util/arrayUtils'

const Talent = ({ talent }) => {
  const [talentList, setTalentList] = useRecoilState(talentState)

  const toggleSelected = () => {
    const newList = replaceItemAtIndex(talentList, talent.id, {
      ...talent,
      isSelected: !talent.isSelected,
    })

    setTalentList(newList)
  }

  return (
    <div>
      <h4>{talent.name}</h4>
      <input type="checkbox"
        checked={talent.isSelected}
        onChange={toggleSelected}
      />
      <p>{talent.max}</p>
      <p>{talent.tests}</p>
      <p>{talent.desc}</p>
    </div>
  )
}

export default Talent

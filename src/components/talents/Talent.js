import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import { talentState } from '../../recoil/atoms'
import { replaceItemAtIndex } from '../../util/arrayUtils'

const Talent = ({ talent }) => {
  const [talentList, setTalentList] = useRecoilState(talentState)
  const [expanded, setExpanded] = useState(false)

  const toggleSelected = () => {
    const newList = replaceItemAtIndex(talentList, talent.id, {
      ...talent,
      isSelected: !talent.isSelected,
    })

    setTalentList(newList)
  }

  return (
    <div className="item-container">
      <div className="item-header-container">
        <h4 onClick={() => setExpanded(!expanded)}
          className="clickable">{talent.name}</h4>
        <input
          type="checkbox"
          checked={talent.isSelected}
          onChange={toggleSelected}
        />
      </div>
      {expanded ?
        <>
          <p>{talent.max}</p>
          <p>{talent.tests}</p>
          <p>{talent.desc}</p>
        </>
        : null}
    </div>
  )
}

export default Talent

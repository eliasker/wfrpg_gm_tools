import React, { useEffect } from 'react'

import { useRecoilValue, useRecoilState } from 'recoil'
import { talentState, skillState, prevLoadedState } from '../recoil/atoms'
import { selectedTalents, selectedSkills } from '../recoil/selectors'

import SkillList from './rules/SkillList'
import TalentList from './rules/TalentList'

import { saveState, getPrevState, clearState } from '../util/localStorageUtil'
import { replaceItemAtIndex } from '../util/arrayUtils'

//TODO: Remove testing buttons 'Save', 'Load' & 'Clear'
//TODO: Selecting items modifies save str
const FrontPage = () => {
  const [initialized, setInitialized] = useRecoilState(prevLoadedState)
  const [talentList, setTalentList] = useRecoilState(talentState)
  const [skillList, setSkillList] = useRecoilState(skillState)
  const talents = useRecoilValue(selectedTalents('Selected'))
  const skills = useRecoilValue(selectedSkills('Selected'))

  useEffect(() => {
    if (!initialized) {
      loadSaved()
      setInitialized(true)
    }
    //TODO:FIXME:
    // eslint-disable-next-line
  }, [])

  const updateArray = (array, stateSetter, listedIds) => {
    listedIds.forEach(id => {
      const index = parseInt(id)
      if (array[index] !== undefined) {
        try {
          array = replaceItemAtIndex(array, index, {
            ...array[index],
            isSelected: true
          })
        } catch (e) { console.error(e) }
      }
    })
    stateSetter(array)
  }

  const loadSaved = () => {
    const talentIds = getPrevState('saved_talents')
    const skillIds = getPrevState('saved_skills')
    var newTalentList = talentList
    var newSkillList = skillList
    if (talentIds !== null && talentIds !== '') {
      updateArray(newTalentList, setTalentList, talentIds.split(' '))
    }
    if (skillIds !== null && skillIds !== '') {
      updateArray(newSkillList, setSkillList, skillIds.split(' '))
    }
  }

  return (
    <div className="content-container">
      <h4>Favorites:</h4>
      <div className="button-container">
        <button onClick={() => saveState(talents, skills)}>Save</button>
        <button onClick={() => loadSaved()}>Load</button>
        <button onClick={() => clearState()}>Clear</button>
      </div>
      <TalentList talents={talents} />
      <SkillList skills={skills} />
    </div>
  )
}

export default FrontPage

import React, { useEffect } from 'react'

import { useRecoilValue, useRecoilState } from 'recoil'
import { talentState, skillState, spellGroupState, prevLoadedState } from '../recoil/atoms'
import { selectedTalents, selectedSkills, selectedSpells } from '../recoil/selectors'

import SkillList from './skills/SkillList'
import TalentList from './talents/TalentList'
import SpellGroupList from './spells/SpellGroupList'

import { saveState, getPrevState, clearState } from '../util/localStorageUtil'
import { replaceItemAtIndex } from '../util/arrayUtils'

//TODO: Remove testing buttons 'Save', 'Load' & 'Clear'
//TODO: Selecting items modifies save str
const FrontPage = () => {
  const [initialized, setInitialized] = useRecoilState(prevLoadedState)
  const [talentList, setTalentList] = useRecoilState(talentState)
  const [skillList, setSkillList] = useRecoilState(skillState)
  const [spellGroups, setSpellGroups] = useRecoilState(spellGroupState)
  const talents = useRecoilValue(selectedTalents('Selected'))
  const skills = useRecoilValue(selectedSkills('Selected'))
  const groups = useRecoilValue(selectedSpells('Selected'))

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

  // TODO: Unmessify (& move elsewhere ?)
  const loadSaved = () => {
    const talentIds = getPrevState('saved_talents')
    const skillIds = getPrevState('saved_skills')
    const spellIds = getPrevState('saved_spells')
    let newTalentList = talentList
    let newSkillList = skillList
    let newGroups = spellGroups
    if (talentIds !== null && talentIds !== '') {
      updateArray(newTalentList, setTalentList, talentIds.split(' '))
    }
    if (skillIds !== null && skillIds !== '') {
      updateArray(newSkillList, setSkillList, skillIds.split(' '))
    }
    if (spellIds !== null && spellIds !== '') {
      try {
        spellIds.split(' ').filter(id => id).forEach(id => {
          const foundGroup = newGroups.find(group => group.spells.some(spell => spell.id === +id))//group.spells.some(target => target.id === id))
          const foundSpell = foundGroup.spells.find(spell => spell.id === +id)
          const spellIndex = foundGroup.spells.findIndex(target => target.id === +id)
          const groupIndex = newGroups.findIndex(group => foundGroup.name === group.name)
          const newSpells = replaceItemAtIndex(foundGroup.spells, spellIndex, {
            ...foundSpell,
            isSelected: true,
          })
          newGroups = replaceItemAtIndex(newGroups, groupIndex, {
            ...foundGroup,
            spells: newSpells,
          })

        })
        setSpellGroups(newGroups)

      } catch (e) { console.error(e) }
    }
  }

  return (
    <div className="content-container">
      <h4>Favorites:</h4>
      <div className="button-container">
        <button onClick={() => saveState(talents, skills, groups)}>Save</button>
        <button onClick={() => loadSaved()}>Load</button>
        <button onClick={() => clearState()}>Clear</button>
      </div>
      <TalentList talents={talents} />
      <SkillList skills={skills} />
      <SpellGroupList groups={groups} searchInput={""} showOnlySelected={true} />
    </div>
  )
}

export default FrontPage

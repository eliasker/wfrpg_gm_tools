import { atom } from 'recoil'

const talentsJSON = require('../data/talents.json')
const skillsJSON = require('../data/skills.json')
const spellsJSON = require('../data/spells.json')

export const talentState = atom({
  key: 'talentState',
  default: talentsJSON.talents
})

export const skillState = atom({
  key: 'skillState',
  default: skillsJSON.skills
})

export const spellGroupState = atom({
  key: 'spellState',
  default: spellsJSON.groups
})

export const prevLoadedState = atom({
  key: 'prevLoadedState',
  default: false
})

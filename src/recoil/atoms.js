import { atom } from 'recoil'

const talentsJSON = require('../data/talents.json')
const skillsJSON = require('../data/skills.json')
const spellsJSON = require('../data/spells.json')

export const talentState = atom({
  key: 'talent state',
  default: talentsJSON.talents
})

export const skillState = atom({
  key: 'skill state',
  default: skillsJSON.skills
})

export const spellGroupState = atom({
  key: 'spell state',
  default: spellsJSON.groups
})

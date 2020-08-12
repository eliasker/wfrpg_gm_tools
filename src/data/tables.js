import headCrit from './images/critTables/headCrits.png'
import bodyCrit from './images/critTables/bodyCrits.png'
import armCrit from './images/critTables/armCrits.png'
import legCrit from './images/critTables/legCrits.png'

export const hitLocations = [
  {
    diceRoll: '1-9',
    location: 'Head',
    type: 'Head'
  },
  {
    diceRoll: '10-24',
    location: 'Secondary Arm',
    type: 'Arm'
  },
  {
    diceRoll: '25-44',
    location: 'Primary Arm',
    type: 'Arm'
  },
  {
    diceRoll: '45-79',
    location: 'Body',
    type: 'Body'
  },
  {
    diceRoll: '80-89',
    location: 'Left Leg',
    type: 'Leg'
  },
  {
    diceRoll: '90-100',
    location: 'Right Leg',
    type: 'Leg'
  }
]

export const critTableImages = [
  { id: 1, img: headCrit, title: 'Head Critical Wounds', type: 'Head', description: 'Head Crit Wound Table' },
  { id: 2, img: bodyCrit, title: 'Body Critical Wounds', type: 'Body', description: 'Body Crit Wound Table' },
  { id: 3, img: armCrit, title: 'Arm Critical Wounds', type: 'Arm', description: 'Arm Crit Wound Table' },
  { id: 4, img: legCrit, title: 'Leg Critical Wounds', type: 'Leg', description: 'Leg Crit Wound Table' }
]
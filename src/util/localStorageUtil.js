//TODO: --> const saveState = (key, value) => {}
export const saveState = (talents, skills, groups) => {
  if (talents !== [] || talents !== undefined) {
    let talentString = ''
    talents.map(t => talentString += `${t.id} `)
    localStorage.setItem('saved_talents', talentString)
  }
  if (skills !== [] || skills !== undefined) {
    let skillString = ''
    skills.map(s => skillString += `${s.id} `)
    localStorage.setItem('saved_skills', skillString)
  }
  if (groups !== [] || groups !== undefined) {
    let spellString = ''
    groups.forEach(group => {
      group.spells.forEach(spell => { if (spell.isSelected) spellString += `${spell.id} ` })
    });
    localStorage.setItem('saved_spells', spellString)
  }
}

export const getPrevState = key => {
  return localStorage.getItem(key)
}

export const clearState = () => localStorage.clear()

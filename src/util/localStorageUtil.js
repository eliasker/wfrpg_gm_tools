//TODO: --> const saveState = (key, value) => {}
export const saveState = (talents, skills) => {
  if (talents !== [] || talents !== undefined) {
    var talentString = ''
    talents.map(t => talentString += `${t.id} `)
    localStorage.setItem('saved_talents', talentString)
  }
  if (skills !== [] || skills !== undefined) {
    var skillString = ''
    skills.map(s => skillString += `${s.id} `)
    localStorage.setItem('saved_skills', skillString)
  }
  // Window.localStorage.setItem('spellsString', spellsString)
}

export const getPrevState = key => {
  return localStorage.getItem(key)
}

export const clearState = () => localStorage.clear()

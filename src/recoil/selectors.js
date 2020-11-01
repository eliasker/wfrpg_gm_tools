import { selectorFamily } from 'recoil'
import { skillState, talentState } from './atoms'

// Returns list of talents depending on selected 'mode'
// Default is everything
export const selectedTalents = selectorFamily({
  key: 'selectedTalents',
  get: (filterType) => ({ get }) => {
    const list = get(talentState)

    switch (filterType) {
      case 'Selected':
        return list.filter((item) => item.isSelected)
      // TODO: searchinput state to atoms.js
      // Reset on rerendering Talents -page?
      /*
      case 'Search':
        const searchInput = get(talentListSearchInput)
        return list.filter(t =>
          t.name.toLowerCase().includes(searchInput.toLowerCase()))
      */
      default:
        return list
    }
  }
})

export const selectedSkills = selectorFamily({
  key:'selectedSkills',
  get: (filterType) => ({ get}) => {
    const list = get(skillState)

    switch(filterType) {
      case 'Selected':
        return list.filter((item) => item.isSelected)
      default: 
        return list  
    }
  }
})

import { ADD, REMOVE } from './actionTypes'

const INITIAL_STATE = {
  elements: 0,
}

const elementReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD:
      return { ...state, elements: state.elements + 1 }

    case REMOVE:
      return { ...state, elements: state.elements - 1 }

    default:
      return state
  }
}

export default elementReducer
import { combineReducers } from 'redux'

import elementReducer from './elementReducer'

const rootReducer = combineReducers({
  elements: elementReducer,
})

export default rootReducer
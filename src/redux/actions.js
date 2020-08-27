import { ADD, REMOVE } from './actionTypes'

export const addElement = () => {
  return {
    type: ADD
  }
}

export const removeElement = () => {
  return {
    type: REMOVE
  }
}
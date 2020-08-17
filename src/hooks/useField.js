import { useState } from 'react'

/**
 * Custom hook for simplifying fields in HTML Form elements
 * @param {*} type 
 */
const useField = (type) => {
  const [value, setValue] = useState('')

  const onChange = (event) => {
    setValue(event.target.value)
  }

  const reset = () => {
    setValue('')
  }

  return { type, value, onChange, reset }
}

export default useField
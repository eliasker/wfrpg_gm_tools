import { useState } from 'react'

const useContent = () => {
  const [current, setCurrent] = useState(null)

  const showCurrent = (name) => current === name ? setCurrent(null) : setCurrent(name)

  return [current, showCurrent]
}

export default useContent
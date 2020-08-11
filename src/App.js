import React from 'react'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Players from './components/players/Players'
import Rules from './components/rules/Rules'
import World from './components/world/World'

const App = () => {
  return (
    <div>
      <Players />
      <Rules />
      <World />
    </div>
  )
}

export default App
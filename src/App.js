import React from 'react'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import Players from './components/players/Players'
import Rules from './components/rules/Rules'
import World from './components/world/World'
import { Navbar, Nav } from 'react-bootstrap'
import Talents from './components/rules/Talents'
import Skills from './components/rules/Skills'
import Spells from './components/rules/Spells'

const App = () => {

  const Main = () => (
    <div>
      <h3>Warhammer Fantasy RPG utilities</h3>
    </div>
  )

  return (
    <div>
      <Router>
        <Navbar>
          <Navbar.Brand as={Link} to="/">
            WFRPG
          </Navbar.Brand>
          <Navbar.Collapse>
            <Nav>
              <Link to="/talents" className="nav-link">Talents</Link>
              <Link to="/skills" className="nav-link">Skills</Link>
              <Link to="/spells" className="nav-link">Spells</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Switch>
          <Route exact path="/"><Main /></Route>
          <Route path="/skills"><Skills /></Route>
          <Route path="/talents"><Talents /></Route>
          <Route path="/spells"><Spells /></Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
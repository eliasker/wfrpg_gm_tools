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

const App = () => {

  const Main = () => (
    <div>
      <h3>Warhammer Fantasy RPG utilities</h3>
      <p>app detail here</p>
    </div>
  )

  return (
    <div>
      <Router>
        <Navbar>
          <Navbar.Brand as={Link} to="/">
            WFRGP
          </Navbar.Brand>
          <Navbar.Collapse>
            <Nav>
              <Link to="/" className="nav-link">Main</Link>
              <Link to="/players" className="nav-link">Players</Link>
              <Link to="/rules" className="nav-link">Rules</Link>
              <Link to="/world" className="nav-link">World</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Switch>
          <Route exact path="/"><Main /></Route>
          <Route path="/players"><Players /></Route>
          <Route path="/rules"><Rules /></Route>
          <Route path="/world"><World /></Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
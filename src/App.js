import React from 'react'
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import { Navbar, Nav } from 'react-bootstrap'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { RecoilRoot } from 'recoil'

import FrontPage from './components/FrontPage'
import TalentsPage from './components/talents/TalentsPage'
import SkillsPage from './components/skills/SkillsPage'
import SpellsPage from './components/spells/SpellsPage'

const App = () => {
  return (
    <RecoilRoot>
      <Router basename="/">
        <Navbar>
          <Navbar.Brand as={Link} to="/">
            WFRPG
          </Navbar.Brand>
          <Navbar.Collapse>
            <Nav>
              <Link to="/talents" className="nav-link navitems">Talents</Link>
              <Link to="/skills" className="nav-link navitems">Skills</Link>
              <Link to="/spells" className="nav-link navitems">Spells</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Switch>
          <Route exact path="/"><FrontPage /></Route>
          <Route path="/skills"><SkillsPage /></Route>
          <Route path="/talents"><TalentsPage /></Route>
          <Route path="/spells"><SpellsPage /></Route>
        </Switch>
      </Router>
    </RecoilRoot>
  )
}

export default App

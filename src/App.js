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
import TalentsPage from './components/rules/TalentsPage'
import SkillsPage from './components/rules/SkillsPage'
import Spells from './components/rules/Spells'

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
              <Link to="/talents" className="nav-link">Talents</Link>
              <Link to="/skills" className="nav-link">Skills</Link>
              <Link to="/spells" className="nav-link">Spells</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Switch>
          <Route exact path="/"><FrontPage /></Route>
          <Route path="/skills"><SkillsPage /></Route>
          <Route path="/talents"><TalentsPage /></Route>
          <Route path="/spells"><Spells /></Route>
        </Switch>
      </Router>
    </RecoilRoot>
  )
}

export default App

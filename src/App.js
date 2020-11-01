import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import { Navbar, Nav } from 'react-bootstrap'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { RecoilRoot, useRecoilValue } from 'recoil'
import { selectedTalents, selectedSkills } from './recoil/selectors'

import TalentsPage from './components/rules/TalentsPage'
import SkillsPage from './components/rules/SkillsPage'
import Spells from './components/rules/Spells'
import TalentList from './components/rules/TalentList'
import SkillList from './components/rules/SkillList'

const App = () => {
  // TODO: Move to separate component
  // TODO: Alternate description for empty lists
  const Main = () => {
    const talents = useRecoilValue(selectedTalents('Selected'))
    const skills = useRecoilValue(selectedSkills('Selected'))
    return (
      <div>
        <h3>Warhammer Fantasy RPG utilities</h3>
        <SkillList skills={skills} />
        <TalentList talents={talents} />
      </div>
    )
  }

  return (
    <RecoilRoot>
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
          <Route path="/skills"><SkillsPage /></Route>
          <Route path="/talents"><TalentsPage /></Route>
          <Route path="/spells"><Spells /></Route>
        </Switch>
      </Router>
    </RecoilRoot>
  )
}

export default App

import React from 'react'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  BrowserRouter as Router,
  Switch, Route, Link
} from 'react-router-dom'
import { connect } from 'react-redux'
import { Navbar, Nav } from 'react-bootstrap'

import { addElement, removeElement } from './redux/actions'

import Talents from './components/talents/TalentList'
import Skills from './components/skills/SkillList'
import Spells from './components/spells/SpellList'
import AddToFavorites from './components/generic/AddToFavorites'

const talentList = require('./data/talents.json')
const skillList = require('./data/skills.json')
const spellsByGroup = require('./data/spells.json')

const App = (props) => {
  console.log('data in redux store ', props)

  const Main = () => (
    <div>
      <h3>Warhammer Fantasy RPG utilities</h3>
      <p>Placeholder testing react redux & other components</p>
      <AddToFavorites />
      <div>Count: {props.elements}</div>
      <button onClick={() => props.addElement()}>Add element</button>
      <button onClick={() => props.removeElement()}>Remove element</button>
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
          <Route path="/skills"><Skills skillList={skillList} /></Route>
          <Route path="/talents"><Talents talentList={talentList} /></Route>
          <Route path="/spells"><Spells spellsByGroup={spellsByGroup} /></Route>
        </Switch>
      </Router>
    </div>
  )
}

const mapStateToProps = state => {
  return { elements: state.elements.elements }
}

const mapDispatchToProps = dispatch => {
  return {
    addElement: () => dispatch(addElement()),
    removeElement: () => dispatch(removeElement())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

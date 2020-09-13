import React, { useState } from 'react'
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

const talentList = require('./data/talents.json')
const skillList = require('./data/skills.json')
const spellsByGroup = require('./data/spells.json')

const App = (props) => {
  console.log('data in redux store ', props)
  const [favorites, setFavorites] = useState([])

  const addToFavs = child => {
    console.log('adding', child.id)
    setFavorites(favorites.concat(child))
  }
  
  const removeFromFavs = child => {
    console.log('removing', child.id);
    const newFavs = favorites.filter(f => f.id !== child.id)
    setFavorites(newFavs)
  }

  console.log(favorites)

  const Main = () => (
    <div>
      <p>Placeholder testing react redux & other components</p>
      <div>Count: {props.elements}</div>
      <button onClick={() => props.addElement()}>Add element</button>
      <button onClick={() => props.removeElement()}>Remove element</button>
    </div>
  )

  return (
    <div className='margin'>
      <Router>
        <Navbar>
          <Navbar.Brand as={Link} to='/'>
            WFRPG
          </Navbar.Brand>
          <Navbar.Collapse>
            <Nav>
              <Link to='/talents' className='nav-link'>Talents</Link>
              <Link to='/skills' className='nav-link'>Skills</Link>
              <Link to='/spells' className='nav-link'>Spells</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Switch>
          <Route exact path='/'><Main /></Route>
          <Route path='/skills'><Skills skillList={skillList} addToFavs={addToFavs} removeFromFavs={removeFromFavs} /></Route>
          <Route path='/talents'><Talents talentList={talentList} addToFavs={addToFavs} removeFromFavs={removeFromFavs} /></Route>
          <Route path='/spells'><Spells spellsByGroup={spellsByGroup} addToFavs={addToFavs} removeFromFavs={removeFromFavs} /></Route>
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

import React from 'react'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import { connect } from 'react-redux'
import { addElement, removeElement } from './redux/actions'
import { Navbar, Nav } from 'react-bootstrap'
import Talents from './components/rules/Talents'
import Skills from './components/rules/Skills'
import Spells from './components/rules/Spells'

const App = (props) => {
  console.log('data in redux store ', props)
  const Main = () => (
    <div>
      <h3>Warhammer Fantasy RPG utilities</h3>
      <p>Placeholder for elements :D & testing react redux</p>
      <div>Count: {props.elements}</div>
      <button onClick={() => props.addElement()}>Add element</button>
      <button onClick={() => props.removeElement()}>Remove element</button>
    </div>
  )

  return (
    <div>
      <Router>
        <Navbar>
          <Navbar.Brand as={Link} to="/main">
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
          <Route exact path="/main"><Main /></Route>
          <Route path="/skills"><Skills /></Route>
          <Route path="/talents"><Talents /></Route>
          <Route path="/spells"><Spells /></Route>
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
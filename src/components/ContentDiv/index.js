import './index.css'
import React from 'react'
import Home from '../../pages/home'
import Contato from '../../pages/contato'
import Projects from '../../pages/projects'
import Anotacoes from '../../pages/anotações'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'

export function Nav() {
  return(
  <nav className='nav'>
    <ul>
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/projects">Projetos</Link>
      </li>
      <li>
        <Link to="/contato">Contato</Link>
      </li>
      <li>
        <Link to="/anotacoes">Anotações</Link>
      </li>
    </ul>
  </nav>
  )
}

export default function ContentDiv() {
  return (
    <Router>

    <Nav/>
    <Switch>

        <Route path="/home">
          <div className="contentdiv">
            <Home />
          </div>
        </Route>
        <Route path="/projects">
          <div className="contentdiv">

            <Projects />
          </div>
        </Route>
        <Route path="/contato">
          <div className="contentdiv">

            <Contato />
          </div>
        </Route>
        <Route path="/anotacoes">
          <div className="contentdiv">

            <Anotacoes />
          </div>
        </Route>
    </Switch>
    </Router>
  )
}
import './index.css'
import React from 'react'
import Sobre from '../../pages/sobre'
import Contato from '../../pages/contato'
import Projetos from '../../pages/projetos'
import Tecnologias from '../../pages/tecnologias'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'

export function Nav() {
  return(
  <nav className='nav'>
    <ul>
      <li>
        <Link to="/sobre">Sobre</Link>
      </li>
      <li>
        <Link to="/projetos">Projetos</Link>
      </li>
      <li>
        <Link to="/contato">Contato</Link>
      </li>
      <li>
        <Link to="/tecnologias">Tecnologias</Link>
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

        <Route path="/sobre">
          <div className="contentdiv">
            <Sobre />
          </div>
        </Route>
        <Route path="/projetos">
          <div className="contentdiv">

            <Projetos />
          </div>
        </Route>
        <Route path="/contato">
          <div className="contentdiv">

            <Contato />
          </div>
        </Route>
        <Route path="/tecnologias">
      <div className="contentdiv">
            <Tecnologias />
          </div>
      </Route><Route path="/">
      <div className="contentdiv">
            <Sobre />
          </div>
      </Route>
    </Switch>
    </Router>
  )
}
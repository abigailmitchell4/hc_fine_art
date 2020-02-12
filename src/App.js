import React from 'react'
import { Switch, Route, } from 'react-router-dom'
import Contact from './components/Contact'
import HayleeCV from './components/HayleeCV'
import Home from './components/Home'
import Meet from './components/Meet'
import Navbar from './components/Navbar'
import Statement from './components/Statement'
import Work19 from './components/Work19'
import Work18 from './components/Work18'
import Work17 from './components/Work17'
import './styles/App.scss'

const App = () => (
  <>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/2019" component={Work19} />
      <Route exact path="/2018" component={Work18} />
      <Route exact path="/2017" component={Work17} />
      <Route exact path="/meet_haylee" component={Meet} />
      <Route exact path="/artist_statement" component={Statement} />
      <Route exact path="/cv" component={HayleeCV} />
      <Route exact path="/contact" component={Contact} />
    </Switch>
  </>
);

export default App;

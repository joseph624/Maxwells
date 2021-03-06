import React, { Component } from 'react';
import './style/App.css';
import Header from './js/components/header';
import Menu from './js/components/menu';
import MenuTwo from './js/components/menuTwo';
import MenuThree from './js/components/menuThree';
import MenuFour from './js/components/menuFour';
import MenuFive from './js/components/menuFive';
import {  HashRouter as Router,  Route, Switch, Link } from 'react-router-dom';

import createHashHistory from 'history/createHashHistory';

const history = createHashHistory();


class App extends Component {
  render() {
    return (
      <Router history={history}>
      <div>

          <Header headerProp="maxwell's pizza" />
          <Route path="/maxwells/menuOne" exact component={Menu} />
          <Route path="/maxwells/menuTwo" exact component={MenuTwo} />
          <Route path="/maxwells/menuThree" exact component={MenuThree} />
          <Route path="/maxwells/menuFour" exact component={MenuFour} />
          <Route path="/maxwells/menuFive" exact component={MenuFive} />

      </div>

      </Router>
    )
  }
}

export default App;

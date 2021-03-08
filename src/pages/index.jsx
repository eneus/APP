import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Home'
import Article from './Article'
import Search from './Search'
import Bookmarks from './Bookmarks'
import NotFoundPage from './Services/NotFound'

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path={Home.path} component={() => <Home.component /> } />
        {/* Build Route components from routeSettings */
        [
          Search,
          Bookmarks,
          Article,
          /* Add More Routes Here */
        ].map((settings, index) => (
          <Route key={`Route-${index}`} {...settings} />
        ))}
        <Route path='*' component={NotFoundPage} />
      </Switch>
    </Router>
  )
}

export default Routes
import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import StudentIndex from './student-components/index'
import StudentShow from './student-components/show'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/students" component={StudentIndex} />
          <Route exact path="/students/:id" component={StudentShow} />
          <Route exact path="/" render={() => <Redirect to="/students" />} />
        </div>
      </Router>
    )
  }
}

export default App;

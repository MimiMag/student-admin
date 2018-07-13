import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import StudentIndex from './student-components/Index'
import StudentShow from './student-components/Show'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <div>
            <Route exact path="/students" component={StudentIndex} />
            <Route exact path="/students/:id" component={StudentShow} />
            <Route exact path="/" render={() => <Redirect to="/students" />} />
          </div>
        </Router>
      </div>
    )
  }
}

export default App;

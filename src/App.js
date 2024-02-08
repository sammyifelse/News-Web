import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import PropTypes from 'prop-types'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";



export default class App extends Component {
  static defaultProps = {
    name: 'stranger',
    country: 'in',
    pageSize: 5
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number

  }
  render() {
    return (
      
      <div>
        <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/"element={<News key="general" pageSize={this.pageSize} country="in" category="general"/>}/>
          <Route exact path="/business"element={<News key="business" pageSize={this.pageSize} country="in" category="business"/>}/>
          <Route exact path="/entertainment"element={<News key="entertainment" pageSize={this.pageSize} country="in" category="entertainment"/>}/>
          <Route exact path="/health"element={<News key="health" pageSize={this.pageSize} country="in" category="health"/>}/>
          <Route exact path="/sports"element={<News key="sports" pageSize={this.pageSize} country="in" category="sports"/>}/>
          <Route exact path="/technology"element={<News key="technology" pageSize={this.pageSize} country="in" category="technology"/>}/>
          <Route exact path="/sciences"element={<News key="sciences" pageSize={this.pageSize} country="in" category="sciences"/>}/>
          {/* <Route exact path="/sciences"element={<News pageSize={this.pageSize} country="in" category="sciences"/>}/>
          <Route exact path="/sciences"element={<News pageSize={this.pageSize} country="in" category="sciences"/>}/> */}
        </Routes>
        </Router>
      </div>
    )
  }
}


import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'



export default class App extends Component {
    pageSize = 5;
    apiKey = process.env.REACT_APP_NEWS_API  //Here the api is called from the .env.local file 
    state = {
      progress:0
    }

    setProgress = (progress)=>{
      this.setState({progress:progress})
    }

  render() {
    return (
      
      <div>
        <Router>
        <Navbar/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress}
      />
        <Routes>
          <Route exact path="/"element={<News  setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageSize} country="in" category="general"/>}/>
          <Route exact path="/business"element={<News  setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={this.pageSize} country="in" category="business"/>}/>
          <Route exact path="/entertainment"element={<News  setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={this.pageSize} country="in" category="entertainment"/>}/>
          <Route exact path="/health"element={<News  setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={this.pageSize} country="in" category="health"/>}/>
          <Route exact path="/sports"element={<News  setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={this.pageSize} country="in" category="sports"/>}/>
          <Route exact path="/technology"element={<News  setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={this.pageSize} country="in" category="technology"/>}/>
          <Route exact path="/sciences"element={<News  setProgress={this.setProgress} apiKey={this.apiKey} key="sciences" pageSize={this.pageSize} country="in" category="sciences"/>}/>
          {/* <Route exact path="/sciences"element={<News  setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} country="in" category="sciences"/>}/>
          <Route exact path="/sciences"element={<News  setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} country="in" category="sciences"/>}/> */}
        </Routes>
        </Router>
      </div>
    )
  }
}


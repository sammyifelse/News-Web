import './App.css';

import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'



const App = () => {
    const pageSize = 5;
    const apiKey = process.env.REACT_APP_NEWS_API  //Here the api is called from the .env.local file 

    const [progress, setProgress] = useState(0)

    return (
      <div>
        <Router>
        <Navbar/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
      />
        <Routes>
          <Route exact path="/"element={<News  setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general"/>}/>
          <Route exact path="/business"element={<News  setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business"/>}/>
          <Route exact path="/entertainment"element={<News  setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment"/>}/>
          <Route exact path="/health"element={<News  setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health"/>}/>
          <Route exact path="/sports"element={<News  setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports"/>}/>
          <Route exact path="/technology"element={<News  setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology"/>}/>
          <Route exact path="/sciences"element={<News  setProgress={setProgress} apiKey={apiKey} key="sciences" pageSize={pageSize} country="in" category="sciences"/>}/>
          {/* <Route exact path="/sciences"element={<News  setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="sciences"/>}/>
          <Route exact path="/sciences"element={<News  setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="sciences"/>}/> */}
        </Routes>
        </Router>
      </div>
    )
}

export default App;


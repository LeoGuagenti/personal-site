import React from 'react'

import { BrowserRouter as Router } from 'react-router-dom'
import Route from 'react-router-dom/Route'
import './Styles/style.css'

//pages
import HomePage from './components/Pages/HomePage'
import AboutPage from './components/Pages/AboutPage'


export default function Client(){
    return (
        <Router>
          <div className="client">
            <Route exact path="/" component={HomePage} />
            <Route exact path="/about" component={AboutPage}/>
          </div>
        </Router>
    );
}
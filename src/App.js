import React, { Component } from 'react'
import Navbar from './components/layout/Navbar';
import './App.css';
export class App extends Component {
  render() {
    return (
      <div>
        <Navbar title="Github Finder" icon="fab fa-github"/>
      </div>
    )
  }
}

export default App


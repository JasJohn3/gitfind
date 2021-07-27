import React, { Component } from 'react'
import Navbar from './components/layout/Navbar';
import UserItem from './components/users/UserItem';
import './App.css';
export class App extends Component {

  render() {
    return (
      <div>
        <Navbar title="Github Finder" icon="fab fa-github"/>
        <UserItem/>
      </div>
    )
  }
}

export default App


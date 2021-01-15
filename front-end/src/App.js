import './App.css';
import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Nav from './components/Nav';
import AddProject from './components/AddProject';
import AddBug from './components/AddBug';
import SeeProject from './components/SeeProject';



class App extends Component{
  render() {
    return (
      <BrowserRouter>
      <Nav />
      <Switch>
        <Route path="/" exact strict component={() => {
          return (
            <div className="App"><Home></Home></div>
          )
        }} />

        <Route path="/about" exact strict component={() => {
          return (
            <div className="App"><About/></div>
          )
        }} />

        <Route path="/addproject" exact strict component={() => {
          return (
            <div className="App"><AddProject/></div>
          )
        }} />     

        <Route path="/addbug" exact strict component={() => {
          return (
            <div className="App"><AddBug/></div>
          )
        }} /> 

        <Route path="/seeproject" exact strict component={() => {
          return (
            <div className="App"><SeeProject/></div>
          )
        }} /> 

      </Switch>
      </BrowserRouter>
      
    )
  }
}

export default App;
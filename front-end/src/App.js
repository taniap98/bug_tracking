import './App.css';
import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from './components/Login';
import About from './components/About';
import Nav from './components/Nav';
import AddProject from './components/AddProject';
import AddBug from './components/AddBug';
import SeeProject from './components/SeeProject';
import ProjectList from './components/ProjectList'
import SeeBugs from './components/SeeBugs';
import SeeBug from './components/SeeBug';
import Register from './components/Register';



class App extends Component{
  render() {
    return (
      <BrowserRouter>
      <Nav />
      <Switch>
      <Route path="/" exact strict component={() => {
          return (
            <div className="App"><Login/></div>
          )
        }} />  

        <Route path="/register" exact strict component={() => {
          return (
            <div className="App"><Register></Register></div>
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

        <Route path="/projectList" exact strict component={() => {
          return (
            <div className="App"><ProjectList/></div>
          )
        }} /> 

        <Route path="/seebugs" exact strict component={() => {
          return (
            <div className="App"><SeeBugs/></div>
          )
        }} />

         <Route path="/seebug" exact strict component={() => {
          return (
            <div className="App"><SeeBug/></div>
          )
        }} />  

          

      </Switch>
      </BrowserRouter>
      
    )
  }
}

export default App;

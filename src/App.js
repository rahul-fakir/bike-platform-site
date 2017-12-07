// React
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// Pages
import PublicIndex from './Public/PublicIndex'

// Firebase
import * as firebase from 'firebase';

class App extends Component {
  constructor() {
    super()
    this.state = {
      name: 'Soul Cycle'
    }
  }

    renderUnauthenticatedUser() {
    return (
      <BrowserRouter>
        <Switch>
        <Route path="/" exact  render={() => <PublicIndex page="home" name ={this.state.name}/>}/> 
        <Route path="/listings" exact  render={() => <PublicIndex page="listings" name ={this.state.name}/>}/> 
        <Route path="/about" exact  render={() => <PublicIndex page="about" name ={this.state.name}/>}/> 
        <Route path="/team" exact  render={() => <PublicIndex page="team" name ={this.state.name}/>}/> 
        <Route path="/login" exact  render={() => <PublicIndex page="login" name ={this.state.name}/>}/> 
        <Route path="/faq" exact  render={() => <PublicIndex page="faq" name ={this.state.name}/>}/> 
        <Route path="/contact" exact  render={() => <PublicIndex page="contact" name ={this.state.name}/>}/> 
        </Switch>
      </BrowserRouter>
    );
  }

  renderAuthenticatedUser() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact render={() => <PublicIndex/>}/>
        </Switch>
      </BrowserRouter>
    );
  }

  render() {
    if (firebase.auth().currentUser) {
      return this.renderAuthenticatedUser()
    } else {
      return this.renderUnauthenticatedUser()
    }
  }
}

export default App;

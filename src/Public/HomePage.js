// React
import React, { Component } from 'react';

import Flexbox from 'flexbox-react';
import Button from 'material-ui/Button';


const styles = {
  bodyText: {
    fontSize: '1.5em',
    color: 'white',
    margin: '0.5em'
  },
  headingText: {
    fontSize: '5em',
    color: 'white',
    margin: '0.25em'
    
  }
}



class HomePage extends Component {
  constructor(props) {
    super()
    this.state = {name: props.name}
  }

  //  initialize state values
  componentDidMount() {
    this.setState({})
  }



  render() {
    return(
      <Flexbox flexDirection="column" justifyContent="center" alignItems="center" >
      <h1 style={styles.headingText}>{this.state.name}</h1>
      <Button raised color="primary" >
        Sign Up
      </Button>
      <p style={styles.bodyText}>{this.state.name} helps you buy and sell used bikes by providing <br/>access to exclusive listings and our network of users.</p>
      </Flexbox>
    )
  }
}

export default HomePage;

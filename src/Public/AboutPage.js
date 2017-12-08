// React
import React, { Component } from 'react';
import Card, { CardContent, CardHeader } from 'material-ui/Card';

class AboutPage extends Component {
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
    <Card style={{width: '80%'}}>
        <CardHeader style={{textAlign: "center"}} title={"- About " + this.state.name + " -"}/>
        <CardContent>
        Spokes delivers to the Penn and Philadelphia communities an online marketplace for the sale and purchase of used bicycles.
        <br/><br/>
         From student to student, Spokes facilitates safe transactions between Penn students and students from West Philadelphia in order to offer discounted bicycles to those who otherwise could not afford them as well as foster a sense of community between them.
        </CardContent>
      </Card>

    )
  }
}

export default AboutPage;

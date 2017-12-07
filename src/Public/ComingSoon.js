// React
import React, { Component } from 'react';
import Card, { CardHeader } from 'material-ui/Card';

class ComingSoon extends Component {
  constructor(props) {
    super()
  }

  render() {
    return(
    <Card style={{width: '80%'}}>
        <CardHeader style={{textAlign: "center"}} title={"- Coming Soon -"}/>
    </Card>
    )
  }
}

export default ComingSoon;

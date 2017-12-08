// React
import React, { Component } from 'react';
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel';
import Typography from 'material-ui/Typography';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';

class FaqPage extends Component {
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
      <div style={{margin: '2em',}}>
      <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography >What is Spokes?</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography>
        Spokes is an online platform helping you buy and sell second hand bikes from trusted members of your community. 
        It provides exclusive access to listings, restricted to your surrounding school area. 
        </Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
    <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography >How does Spokes work?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          Members pay a small, annual fee that provides unlimited access to listings and community members.           
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography >Why is there a fee?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          Our fee allows us to help you find the perfect bicycle, without charging any commission on the sale. This ends 
          up being much cheaper for our users! 
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>





    </div>

    )
  }
}

export default FaqPage;
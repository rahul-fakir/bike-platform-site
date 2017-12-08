// React
import React, { Component } from 'react';
import Card, { CardMedia, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

import Flexbox from 'flexbox-react';


import Alex from './team/Alex.jpg'
import Brandon from './team/Brandon.jpg'
import Claudio from './team/Claudio.jpg'
import Jeremy from './team/Jeremy.png'
import Keith from './team/Keith.jpg'
import Linda from './team/Linda.jpg'

const styles = {
    card: {
        marginRight: '1em',
        marginLeft: '1em',
        width: '20em'
    },
    row: {
        marginTop: '1em'
    }
}

class TeamPage extends Component {
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
<Flexbox  flexDirection="column"  style={{margin: '1em'}}>
    <Flexbox  flexDirection="row" style={styles.row}>
        <Card flex={1} style={styles.card}>
            <CardMedia
                style={{height: 250}}
                image={Jeremy}
                />
            <CardContent>
            <Typography type="headline" component="h2">
            Jeremy Falk
            </Typography>
            <Typography type="subheading" component="h6">
                    Co-Project Lead 
                </Typography>
            </CardContent>
        </Card>
        <Card flex={1} style={styles.card}>
            <CardMedia
                style={{height: 250}}
                image={Linda}
                />
            <CardContent>
            <Typography type="headline" component="h2">
            Linda Sun
            </Typography>
            <Typography type="subheading" component="h6">
                    Co-Project Lead
                </Typography>
            </CardContent>
        </Card>
        <Card flex={1} style={styles.card}>
            <CardMedia
                style={{height: 250}}
                image={Alex}
                />
            <CardContent>
            <Typography type="headline" component="h2">
            Alex Lee
            </Typography>
            <Typography type="subheading" component="h6">
                    Chief Creative Officer
                </Typography>
            </CardContent>
        </Card>
    </Flexbox>
    <Flexbox  flexDirection="row" style={styles.row}>
    <Card flex={1} style={styles.card}>
        <CardMedia
            style={{height: 250}}
            image={Claudio}
            />
        <CardContent>
        <Typography type="headline" component="h2">
        Claudio Laratelli
        </Typography>
        <Typography type="subheading" component="h6">
                Business Development Officer 
            </Typography>
        </CardContent>
    </Card>
    <Card flex={1} style={styles.card}>
        <CardMedia
            style={{height: 250}}
            image={Brandon}
            />
        <CardContent>
        <Typography type="headline" component="h2">
        Brandon Winner
        </Typography>
        <Typography type="subheading" component="h6">
                Marketing Lead
            </Typography>
        </CardContent>
    </Card>
    <Card flex={1} style={styles.card}>
        <CardMedia
            style={{height: 250}}
            image={Keith}
            />
        <CardContent>
        <Typography type="headline" component="h2">
        Kieth Babitz
        </Typography>
        <Typography type="subheading" component="h6">
                Head of Analytics
            </Typography>

        </CardContent>
    </Card>
</Flexbox>
</Flexbox>

    )
  }
}

export default TeamPage;

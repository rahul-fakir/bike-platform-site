// React
import React, { Component } from 'react';
import Card, { CardMedia, CardContent, CardHeader } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

import Flexbox from 'flexbox-react';

const styles = {
    card: {
        marginRight: '1em',
        marginLeft: '1em'
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
                style={{height: 200}}
                image="http://sunfieldfarm.org/wp-content/uploads/2014/02/profile-placeholder.png"
                title="Contemplative Reptile"/>
            <CardContent>
            <Typography type="headline" component="h2">
            Member Name
            </Typography>
            <Typography type="subheading" component="h6">
                    Role
                </Typography>
                <Typography component="p">
                    Member Description goes here
                </Typography>
            </CardContent>
        </Card>
        <Card flex={1} style={styles.card}>
            <CardMedia
                style={{height: 200}}
                image="http://sunfieldfarm.org/wp-content/uploads/2014/02/profile-placeholder.png"
                title="Contemplative Reptile"/>
            <CardContent>
            <Typography type="headline" component="h2">
            Member Name
            </Typography>
            <Typography type="subheading" component="h6">
                    Role
                </Typography>
                <Typography component="p">
                    Member Description goes here
                </Typography>
            </CardContent>
        </Card>
        <Card flex={1} style={styles.card}>
            <CardMedia
                style={{height: 200}}
                image="http://sunfieldfarm.org/wp-content/uploads/2014/02/profile-placeholder.png"
                title="Contemplative Reptile"/>
            <CardContent>
            <Typography type="headline" component="h2">
            Member Name
            </Typography>
            <Typography type="subheading" component="h6">
                    Role
                </Typography>
                <Typography component="p">
                    Member Description goes here
                </Typography>
            </CardContent>
        </Card>
    </Flexbox>
    <Flexbox  flexDirection="row" style={styles.row}>
    <Card flex={1} style={styles.card}>
        <CardMedia
            style={{height: 200}}
            image="http://sunfieldfarm.org/wp-content/uploads/2014/02/profile-placeholder.png"
            title="Contemplative Reptile"/>
        <CardContent>
        <Typography type="headline" component="h2">
        Member Name
        </Typography>
        <Typography type="subheading" component="h6">
                Role
            </Typography>
            <Typography component="p">
                Member Description goes here
            </Typography>
        </CardContent>
    </Card>
    <Card flex={1} style={styles.card}>
        <CardMedia
            style={{height: 200}}
            image="http://sunfieldfarm.org/wp-content/uploads/2014/02/profile-placeholder.png"
            title="Contemplative Reptile"/>
        <CardContent>
        <Typography type="headline" component="h2">
        Member Name
        </Typography>
        <Typography type="subheading" component="h6">
                Role
            </Typography>
            <Typography component="p">
                Member Description goes here
            </Typography>
        </CardContent>
    </Card>
    <Card flex={1} style={styles.card}>
        <CardMedia
            style={{height: 200}}
            image="http://sunfieldfarm.org/wp-content/uploads/2014/02/profile-placeholder.png"
            title="Contemplative Reptile"/>
        <CardContent>
        <Typography type="headline" component="h2">
        Member Name
        </Typography>
        <Typography type="subheading" component="h6">
                Role
            </Typography>
            <Typography component="p">
                Member Description goes here
            </Typography>
        </CardContent>
    </Card>
</Flexbox>
</Flexbox>

    )
  }
}

export default TeamPage;

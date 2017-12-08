
import React from 'react';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';

import Button from 'material-ui/Button';
import { Link } from 'react-router-dom'
import Flexbox from 'flexbox-react';
import { SocialIcon } from 'react-social-icons';

import HomePage from './HomePage'
import AboutPage from './AboutPage'
import TeamPage from './TeamPage'
import FaqPage from './FaqPage'
import ComingSoon from './ComingSoon'

import HomeBackground from './backgrounds/home.jpg';
import ListingBackground from './backgrounds/listing.jpg';
import LoginBackground from './backgrounds/login.jpg';
import TeamBackground from './backgrounds/team.jpg';
import AboutBackground from './backgrounds/about.jpg';



const styles = {
    link: {
        textDecoration: 'none'
    },
    homeBackground: {
        backgroundImage: `url(${HomeBackground})`, 
        backgroundPosition: 'center', 
        backgroundSize: 'cover',
    },
    listingBackground: {
      backgroundImage: `url(${ListingBackground})`, 
      backgroundPosition: 'center', 
      backgroundSize: 'cover'
    },
    aboutBackground: {
      backgroundImage: `url(${AboutBackground})`, 
      backgroundPosition: 'center', 
      backgroundSize: 'cover'
    },
    teamBackground: {
      backgroundImage: `url(${TeamBackground})`, 
      backgroundPosition: 'center', 
      backgroundSize: 'cover'
    },
    loginBackground: {
      backgroundImage: `url(${LoginBackground})`, 
      backgroundPosition: 'center', 
      backgroundSize: 'cover'
    },
    contactBackground: {
      backgroundImage: `url(${HomeBackground})`, 
      backgroundPosition: 'center', 
      backgroundSize: 'cover',
    },
    faqBackground: {
      backgroundImage: `url(${HomeBackground})`, 
      backgroundPosition: 'center', 
      backgroundSize: 'cover',
    }
    
}


class PublicIndex extends React.Component {
    constructor(props) {
        super()
        
        this.state = {
          name: props.name, 
          page: props.page
        }
    }

    componentWillReceiveProps(props) {
        this.setState({page: props.page})
    }

    renderHeader() {
        return (
            <AppBar position="static" style={{position: "fixed"}}> 
            <Toolbar>
            <Link to="/" style={styles.link}><Button color="contrast">{this.state.name}</Button></Link>
            <Link to="listings" style={styles.link}><Button color="contrast">Bike Listings</Button></Link>
            <Link to="about" style={styles.link}><Button color="contrast">About</Button></Link>
            <Link to="team" style={styles.link}><Button color="contrast">The Team</Button></Link>
            <div style={{flex:1}}> </div>
            <Link to="login" style={styles.link}><Button color="contrast">Login</Button></Link>
            </Toolbar>
          </AppBar>
        )
    }

    renderFooter() {
      return(
        <div style={{backgroundColor: '#4F2BB6', width: '100%', marginBottom: '-0.1em'}}>
        <Toolbar>
        <Link to="faq" style={styles.link}><Button color="contrast">FAQ</Button></Link>
        <Link to="contact" style={styles.link}><Button color="contrast">Contact Us</Button></Link>
        <div style={{flex:1}}> </div>


    <SocialIcon style={{ height: 35, width: 35, marginRight: '0.5em' }} url="http://facebook.com/" color="white"/>
    <SocialIcon style={{ height: 35, width: 35, marginRight: '0.5em'  }} url="http://twitter.com/" color="white"/>
    <SocialIcon style={{ height: 35, width: 35, marginRight: '0.5em'  }} url="http://instagram.com/" color="white"/>
          </Toolbar>
      </div>
        )
    }

    renderBody() {
      if (this.state.page === 'home') {
        return (
          <Flexbox flexGrow={1} flexDirection="column" style={styles.homeBackground} justifyContent="center" alignItems="center" >
            <HomePage name={this.state.name}/>
          </Flexbox>
        )
      } if (this.state.page === 'listings') {
        return (
          <Flexbox flexGrow={1} flexDirection="column" style={styles.listingBackground} justifyContent="center" alignItems="center" >
            <ComingSoon name={this.state.name}/>
          </Flexbox>
        )
      } if (this.state.page === 'about') {
        return (
          <Flexbox flexGrow={1} flexDirection="column" style={styles.aboutBackground} justifyContent="center" alignItems="center" >
           <AboutPage name={this.state.name}/>
          </Flexbox>
        )
      } if (this.state.page === 'team') {
        return (
          <Flexbox flexGrow={1} flexDirection="column" style={styles.teamBackground} justifyContent="center" alignItems="center" >
            <TeamPage name={this.state.name}/>
          </Flexbox>
        )
      }  if (this.state.page === 'login') {
        return (
          <Flexbox flexGrow={1} flexDirection="column" style={styles.loginBackground} justifyContent="center" alignItems="center" >
            <ComingSoon name={this.state.name}/>
          </Flexbox>
        )
      } else
      if (this.state.page === 'faq') {
        return (
          <Flexbox flexGrow={1} flexDirection="column" style={styles.faqBackground} justifyContent="center" alignItems="center" >
            <FaqPage name={this.state.name}/>
          </Flexbox>
        )
      } else if (this.state.page === 'contact') {
        return (
          <Flexbox flexGrow={1} flexDirection="column" style={styles.contactBackground} justifyContent="center" alignItems="center" >
            <ComingSoon name={this.state.name}/>
          </Flexbox>
        )
      } else {
        return (
          <Flexbox flexGrow={1} flexDirection="column" >  
            {this.state.page}    
          </Flexbox>
        )
      }
    }

  render() {

    return (



<Flexbox flexDirection="column" minHeight="100vh">
  <Flexbox element="header" height="60px">
    {this.renderHeader()}
  </Flexbox>
 
{this.renderBody()}
 
  <Flexbox element="footer" height="60px">
{this.renderFooter()}
  </Flexbox>
</Flexbox>


    );
  }
}


export default (PublicIndex);



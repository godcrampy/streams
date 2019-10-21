import React from 'react'
import { Link } from 'react-router-dom'
import { Typography } from 'antd'
import { connect } from 'react-redux'
import { setIsSignedIn } from '../actions'

import GoogleLogin, { GoogleLogout } from 'react-google-login'

// import GoogleAuth from './GoogleAuth'
import './Header.scss'

class Header extends React.Component {
  signInSuccess = (data) => {
    this.props.setIsSignedIn(true);
    console.log(data);
  }
  logout = (data) => {
    this.props.setIsSignedIn(false);
    console.log(data)
  }
  renderAuthButton = () => {
    return (
      this.props.isSignedIn ?
        <GoogleLogout
          clientId='840846793283-c1gl190mg59u7p1tatvnj6b8v3t52sr3.apps.googleusercontent.com'
          buttonText="Logout"
          onLogoutSuccess={this.logout}
        /> :
        <GoogleLogin
          clientId='840846793283-c1gl190mg59u7p1tatvnj6b8v3t52sr3.apps.googleusercontent.com'
          buttonText='Join'
          onSuccess={this.signInSuccess}
          onFailure={this.logout} />
    )
  }
  render() {
    return (
      <header id="Header" >
        <Link to="/" className="title">
          <Typography.Title>Streamy</Typography.Title>
        </Link>
        <Link to="/" className="subtitle">
          <Typography.Text >Streams</Typography.Text>
        </Link>
        <Link to="/" className="subtitle">
          {this.renderAuthButton()}
        </Link>
      </header>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.isSignedIn
  }
}

export default connect(mapStateToProps, { setIsSignedIn })(Header);
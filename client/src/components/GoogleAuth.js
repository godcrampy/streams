import React from 'react'
import { Button, Spin, Icon } from 'antd'

class GoogleAuth extends React.Component {
  state = {
    // default value when component loads
    isSignedIn: null
  }
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '840846793283-c1gl190mg59u7p1tatvnj6b8v3t52sr3.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.setState({ isSignedIn: this.auth.isSignedIn.get() });
        this.auth.isSignedIn.listen(this.onAuthChange)
      })
    })
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() })
  }

  onSignInClick = () => {
    this.auth.signIn();
  }

  onSignOutClick = () => {
    this.auth.signOut();
  }

  renderAuthButton() {
    switch (this.state.isSignedIn) {
      case null:
        return <Button><Spin /></Button>
      case true:
        return <Button onClick={this.onSignOutClick}>Logout</Button>
      default:
        return <Button onClick={this.onSignInClick}><Icon type="google" />Sign In</Button>
    }
  }

  render() {
    return (
      <div>{this.renderAuthButton()}</div>
    )
  }
}

export default GoogleAuth;
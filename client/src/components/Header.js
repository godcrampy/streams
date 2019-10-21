import React from 'react'
import { Link } from 'react-router-dom'
import { Typography } from 'antd'

import GoogleAuth from './GoogleAuth'
import './Header.scss'

const Header = () => {
  return (
    <header id="Header">
      <Link to="/" className="title">
        <Typography.Title>Streamy</Typography.Title>
      </Link>
      <Link to="/" className="subtitle">
        <Typography.Text >Streams</Typography.Text>
      </Link>
      <Link to="/" className="subtitle">
        <GoogleAuth />
      </Link>
    </header>
  )
}

export default Header;
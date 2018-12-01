import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'white',
      // marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
        textAlign: 'center',
      }}
    >
      <Link to="/">Home</Link>
      <Link to="/about/">About page link</Link>
      <Link to="/cast/">cast page link</Link>
      <Link to="/tourdates/">Tour dates</Link>
    </div>
  </div>
)

export default Header

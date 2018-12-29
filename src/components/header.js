import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import CollapsedHeader from './CollapsedHeader'
import BookNow from './ImageComponents/BookNow'

const NavWrapper = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: 1.45rem 1.0875rem;
  text-align: center;
  position: absolute;
  top: 0px;
  left: 50%;
  z-index: 10;
  transform: translate(-50%);
`

const Nav = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 10px;
  width: 60%;
`
const NavItem = styled.div`
  font-family: 'Bourton-base';
  font-size: 22px;
  background-image: -moz-linear-gradient(
    25deg,
    rgb(213, 126, 20) 0%,
    rgb(252, 196, 69) 38%,
    rgb(250, 184, 46) 71%,
    rgb(213, 126, 20) 100%
  );

  background-image: -webkit-linear-gradient(
    25deg,
    rgb(213, 126, 20) 0%,
    rgb(252, 196, 69) 38%,
    rgb(250, 184, 46) 71%,
    rgb(213, 126, 20) 100%
  );

  background-image: -ms-linear-gradient(
    25deg,
    rgb(213, 126, 20) 0%,
    rgb(252, 196, 69) 38%,
    rgb(250, 184, 46) 71%,
    rgb(213, 126, 20) 100%
  );
  width: ${ props => props.width || '90px' };
  border-radius: 3px;
  color: black;
  margin-top: ${ props => props.drop };
  transform: rotate(${ props => props.rotate || 0 });
  -webkit-transition: 0.15s ease-in-out !important;
  transition: 0.15s ease-in-out !important;
  :hover {
    color: white;
    text-shadow: 1px 1px 10px #fff, 1px 1px 10px #ccc;
  }
  ${ props =>
    props.active && {
      color: 'white',
      textShadow: '1px 1px 10px #fff, 1px 1px 10px #ccc'
    } };
`
const BookNowWrapper = styled.div`
  width: 130px;
`
class Header extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isMobile: false
    }
    this.handleResize = this.handleResize.bind(this)
  }

  componentDidMount () {
    if (typeof window !== 'undefined') {
      this.handleResize()
      window.addEventListener('resize', this.handleResize)
    }
  }

  componentWillUnmount () {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.handleResize)
    }
  }
  handleResize () {
    let currentIsMobile = window.innerWidth <= 1024
    if (currentIsMobile !== this.state.isMobile) {
      this.setState({ isMobile: currentIsMobile })
    }
  }
  render () {
    const { isMobile } = this.state
    const { page } = this.props

    if (isMobile) return <CollapsedHeader page={page} />
    return (
      <NavWrapper data-cy="header">
        <Nav>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <NavItem rotate="-2deg" active={page === '/'} data-cy="nav-home">
              Home
            </NavItem>
          </Link>
          <Link
            to="/about/"
            style={{ textDecoration: 'none' }}
            data-cy="nav-about"
          >
            <NavItem rotate="5deg" drop="10px" active={page.includes('/about')}>
              About
            </NavItem>
          </Link>
          <Link
            to="/cast/"
            style={{ textDecoration: 'none' }}
            data-cy="nav-cast"
          >
            <NavItem
              width="220px"
              rotate="-2deg"
              active={page.includes('/cast')}
            >
              Cast & Creatives
            </NavItem>
          </Link>
          <Link
            to="/gallery/"
            style={{ textDecoration: 'none' }}
            data-cy="nav-gallery"
          >
            <NavItem
              width="120px"
              rotate="5deg"
              drop="10px"
              active={page.includes('/gallery')}
            >
              Gallery
            </NavItem>
          </Link>
          <Link
            to="/tourdates/"
            style={{ textDecoration: 'none' }}
            data-cy="nav-tourdates"
          >
            <NavItem
              width="150px"
              rotate="-4deg"
              active={page.includes('/tourdates')}
            >
              Tour Dates
            </NavItem>
          </Link>
          <a
            href="https://crooners.ecwid.com/"
            target="about_blank"
            style={{ textDecoration: 'none' }}
          >
            <NavItem
              rotate="5deg"
              drop="10px"
              active={page.includes('/shop')}
              data-cy="nav-shop"
            >
              Shop
            </NavItem>
          </a>
          <Link to="/tourdates/" style={{ textDecoration: 'none' }}>
            <BookNowWrapper>
              <BookNow />
            </BookNowWrapper>
          </Link>
        </Nav>
      </NavWrapper>
    )
  }
}

export default Header

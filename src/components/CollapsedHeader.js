import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const BookNowWrapper = styled.div`
  height: 100px;
  position: absolute;
  right: 0;
  top: 0;
  overflow: hidden;
  width: 200px;
`

const Book = styled.div`
  background: #94001c;
  color: #fff;
  font-size: 1em;
  height: 40px;
  left: 50%;
  letter-spacing: 1px;
  padding-top: 8px;
  position: absolute;
  text-align: left;
  text-indent: 118px;
  top: 50%;
  transform: translate(-35%, -50%) rotate(30deg);
  width: 200%;
  z-index: 10;
`

const CollapsedNavBar = styled.div`
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
  z-index: 10;
  .menu-content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.5s cubic-bezier(0, 1, 0, 1);
    ${ props =>
    props.isOpen && {
      maxHeight: '1000px',
      zIndex: '10',
      transition: 'max-height 1s ease-in-out'
    } }
  }
  .collapsible-menu {
    font-family: 'Bourton-base';
    font-size: 22px;
    background-image: ${ props =>
    `-moz-linear-gradient(
      25deg,
      rgb(213, 126, 20) 0%,
      rgb(252, 196, 69) 38%,
      rgb(250, 184, 46) 71%,
      rgb(213, 126, 20) 100%
    )` };

    background-image: ${ props =>
    `-webkit-linear-gradient(
      25deg,
      rgb(213, 126, 20) 0%,
      rgb(252, 196, 69) 38%,
      rgb(250, 184, 46) 71%,
      rgb(213, 126, 20) 100%
    )` };

    background-image: ${ props =>
    `-ms-linear-gradient(
      25deg,
      rgb(213, 126, 20) 0%,
      rgb(252, 196, 69) 38%,
      rgb(250, 184, 46) 71%,
      rgb(213, 126, 20) 100%
    )` };
    background-color: #001025;
    padding: 0px 30px 10px;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
    color: black;
  }
  .collapsible-menu ul {
    list-style-type: none;
    padding: 0;
  }
  .collapsible-menu a {
    display: block;
    padding: 10px;
    text-decoration: none;
    color: black;
    :hover {
      color: white !important;
      text-shadow: 1px 1px 10px #fff, 1px 1px 10px #ccc;
    }
  }
`
const Line = styled.div`
  width: 35px;
  height: 5px;
  background-color: black;
  margin: 6px 50%;
  transform: translate(-50%);
  transition: 0.4s;

  ${ props =>
    props.isOpen &&
    props.top && {
      webkitTransform: 'rotate(-45deg) translate(-12px, 6px)',
      transform: 'rotate(-45deg) translate(-12px, 6px)'
    } }
    ${ props =>
    props.isOpen &&
      props.middle && {
      opacity: '0'
    } }
    ${ props =>
    props.isOpen &&
      props.bottom && {
      webkitTransform: 'rotate(45deg) translate(-10px, -2px)',
      transform: 'rotate(45deg) translate(-10px, -2px)'
    } }

`
const Hamburger = styled.button`
  padding: 5px;
  margin: 0;
  width: 55px;
  height: auto;
  margin-top: 0.5vh;
  position: relative;
  left: 1%;
  top: 5px;
  z-index: 11;
  transform: translate(-45%);
  border: 0;
  cursor: pointer;
  background-image: ${ props => props.isOpen && 'none' };
  background-color: transparent;
`

class CollapsedHeader extends React.Component {
  constructor (props) {
    super(props)
    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false
    }
  }
  toggle () {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  render () {
    const { page } = this.props
    return (
      <CollapsedNavBar isOpen={this.state.isOpen}>
        <div className="collapsible-menu" data-cy="collapsed-header">
          <Hamburger
            isOpen={this.state.isOpen}
            onClick={this.toggle}
            data-cy="hamburger"
            role="button"
            type="button"
          >
            <Line isOpen={this.state.isOpen} top />
            <Line isOpen={this.state.isOpen} middle />
            <Line isOpen={this.state.isOpen} bottom />
          </Hamburger>
          <div className="menu-content">
            <ul>
              <li>
                <BookNowWrapper>
                  <Link to="/tourdates/">
                    <Book>
                      <p>BOOK NOW</p>
                    </Book>
                  </Link>
                </BookNowWrapper>
              </li>

              <li selected={page === '/'}>
                <Link
                  to="/"
                  onClick={this.toggle}
                  style={{
                    color: page === '/' ? 'white' : 'black'
                  }}
                  data-cy="collapsed-home"
                >
                  Home
                </Link>
              </li>
              <li selected={page.includes('/about')}>
                <Link
                  to="/about"
                  onClick={this.toggle}
                  style={{
                    color: page.includes('/about') ? 'white' : 'black'
                  }}
                  data-cy="collapsed-about"
                >
                  About
                </Link>
              </li>
              <li selected={page.includes('/cast')}>
                <Link
                  to="/cast"
                  onClick={this.toggle}
                  style={{
                    color: page.includes('/cast') ? 'white' : 'black'
                  }}
                  data-cy="collapsed-cast"
                >
                  Cast & Creatives
                </Link>
              </li>
              <li selected={page.includes('/gallery')}>
                <Link
                  to="/gallery"
                  onClick={this.toggle}
                  style={{
                    color: page.includes('/gallery') ? 'white' : 'black'
                  }}
                  data-cy="collapsed-gallery"
                >
                  Gallery
                </Link>
              </li>
              <li selected={page.includes('/tourdates')}>
                <Link
                  to="/tourdates"
                  onClick={this.toggle}
                  style={{
                    color: page.includes('/tourdates') ? 'white' : 'black'
                  }}
                  data-cy="collapsed-tourdates"
                >
                  Tour Dates
                </Link>
              </li>
              <li>
                <a
                  href="https://crooners.ecwid.com/"
                  target="about_blank"
                  style={{ textDecoration: 'none' }}
                  onClick={this.toggle}
                  data-cy="collapsed-shop"
                >
                  Shop
                </a>
              </li>
            </ul>
          </div>
        </div>
      </CollapsedNavBar>
    )
  }
}

export default CollapsedHeader

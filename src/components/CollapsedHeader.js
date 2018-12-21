import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import BookNow from './ImageComponents/BookNow'

const BookNowWrapper = styled.div`
  width: 130px;
  z-index: 10;
  cursor: pointer;
  margin-top: 3%;
  @media screen and (max-width: 600px) {
    margin: auto;
  }
`

const CollapsedNavBar = styled.div`
 position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
  z-index: 1000;
  .menu-content {
    max-height: 0;
    overflow: hidden;
  }
  .collapsible-menu {
    font-family: 'Bourton-base';
    font-size: 22px;
    background-image: ${ props =>
    props.isOpen &&
      `-moz-linear-gradient(
      25deg,
      rgb(213, 126, 20) 0%,
      rgb(252, 196, 69) 38%,
      rgb(250, 184, 46) 71%,
      rgb(213, 126, 20) 100%
    )` };

     background-image: ${ props =>
    props.isOpen &&
       `-webkit-linear-gradient(
      25deg,
      rgb(213, 126, 20) 0%,
      rgb(252, 196, 69) 38%,
      rgb(250, 184, 46) 71%,
      rgb(213, 126, 20) 100%
    )` };

    background-image: ${ props =>
    props.isOpen &&
      `-ms-linear-gradient(
      25deg,
      rgb(213, 126, 20) 0%,
      rgb(252, 196, 69) 38%,
      rgb(250, 184, 46) 71%,
      rgb(213, 126, 20) 100%
    )` };
    background-color: #001025;
    padding: 0px 30px 20px;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
    color: black;
    margin-bottom:5%;
    /* ${ props => !props.isOpen && { height: '0' } }; */
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
  .collapsible-menu label {
    cursor: pointer;
  }
  .collapsible-menu img {
  }
  input#menu {
    display: none;
  }
  /* Toggle Effect */
  input:checked ~ .menu-content {
    max-height: 100%;
    z-index: 10;
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
  z-index: 10;
  transform: translate(-45%);
  border: 0;
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
  background-image: ${ props => props.isOpen && 'none' };
  background-color: transparent;
  :focus {
    outline: none;
  }
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
          <input
            type="checkbox"
            id="menu"
            checked={this.state.isOpen}
            readOnly
          />
          <label className="NavMenuIcon" htmlFor="menu">
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
          </label>
          <div className="menu-content">
            <ul>
              {this.state.isOpen && (
                <li>
                  <Link to="/tourdates/">
                    <BookNowWrapper>
                      <BookNow />
                    </BookNowWrapper>
                  </Link>
                </li>
              )}
              <li selected={page === 'Home'}>
                <Link
                  to="/"
                  onClick={this.toggle}
                  style={{
                    color: page === 'Home' ? 'white' : 'black'
                  }}
                  data-cy="collapsed-home"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={this.toggle}
                  style={{
                    color: page === 'About' ? 'white' : 'black'
                  }}
                  data-cy="collapsed-about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/cast"
                  onClick={this.toggle}
                  style={{
                    color: page === 'Cast' ? 'white' : 'black'
                  }}
                  data-cy="collapsed-cast"
                >
                  Cast & Creatives
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  onClick={this.toggle}
                  style={{
                    color: page === 'Gallery' ? 'white' : 'black'
                  }}
                  data-cy="collapsed-gallery"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/tourdates"
                  onClick={this.toggle}
                  style={{
                    color: page === 'TourDates' ? 'white' : 'black'
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

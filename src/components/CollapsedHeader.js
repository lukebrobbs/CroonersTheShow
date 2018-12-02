import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import HamburgerMenu from '../images/menu.png'
import BookNow from './ImageComponents/BookNow'

const BookNowWrapper = styled.div`
  width: 130px;
  position: absolute;
  left: 35%;
  top: 3.5vh;
  z-index: 10;
  cursor: pointer;
`

const CollapsedNavBar = styled.div`
  .menu-content {
    max-height: 0;
    overflow: hidden;
  }
  .collapsible-menu {

    font-family: 'Bourton-base';
    font-size: 22px;
    background-image: ${props =>
      props.isOpen &&
      `-moz-linear-gradient(
      25deg,
      rgb(213, 126, 20) 0%,
      rgb(252, 196, 69) 38%,
      rgb(250, 184, 46) 71%,
      rgb(213, 126, 20) 100%
    )`};

     background-image: ${props =>
       props.isOpen &&
       `-webkit-linear-gradient(
      25deg,
      rgb(213, 126, 20) 0%,
      rgb(252, 196, 69) 38%,
      rgb(250, 184, 46) 71%,
      rgb(213, 126, 20) 100%
    )`};

    background-image: ${props =>
      props.isOpen &&
      `-ms-linear-gradient(
      25deg,
      rgb(213, 126, 20) 0%,
      rgb(252, 196, 69) 38%,
      rgb(250, 184, 46) 71%,
      rgb(213, 126, 20) 100%
    )`};
    background-color: #001025;
    padding: 10px 30px;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
    color: black;
    /* ${props => !props.isOpen && { height: '0' }}; */
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
const Hamburger = styled.img`
  padding: 5px;
  margin: 0;
  width: 7%;
  height: auto;
  margin-top: 0.5vh;
  position: relative;
  left: 1%;
  top: 10px;
  z-index: 10;
  transform: translate(-45%);
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
  background-image: ${props => props.isOpen && 'none'};
  @media screen and (max-width: 700px) {
    width: 10%;
  }
  @media screen and (max-width: 400px) {
    width: 15%;
  }
`

class CollapsedHeader extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false,
    }
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }
  render() {
    const { page } = this.props
    return (
      <CollapsedNavBar isOpen={this.state.isOpen}>
        <div className="collapsible-menu">
          <input
            type="checkbox"
            id="menu"
            checked={this.state.isOpen}
            readOnly
          />
          <label className="NavMenuIcon" htmlFor="menu" onClick={this.toggle}>
            <Hamburger
              src={HamburgerMenu}
              alt="Nav Menu Collape Button"
              isOpen={this.state.isOpen}
            />
          </label>
          <Link to="/tourdates/">
            <BookNowWrapper>
              <BookNow />
            </BookNowWrapper>
          </Link>
          <div className="menu-content">
            <ul>
              <li selected={page === 'Home'}>
                <Link
                  to="/"
                  onClick={this.toggle}
                  style={{
                    color: page === 'Home' ? 'white' : 'black',
                  }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={this.toggle}
                  style={{
                    color: page === 'About' ? 'white' : 'black',
                  }}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/cast"
                  onClick={this.toggle}
                  style={{
                    color: page === 'Cast' ? 'white' : 'black',
                  }}
                >
                  Cast & Creatives
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  onClick={this.toggle}
                  style={{
                    color: page === 'Gallery' ? 'white' : 'black',
                  }}
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/tourdates"
                  onClick={this.toggle}
                  style={{
                    color: page === 'TourDates' ? 'white' : 'black',
                  }}
                >
                  Tour Dates
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  onClick={this.toggle}
                  style={{
                    color: page === 'Shop' ? 'white' : 'black',
                  }}
                >
                  Shop
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </CollapsedNavBar>
    )
  }
}

export default CollapsedHeader

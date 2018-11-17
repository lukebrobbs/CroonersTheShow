import React from 'react'
import { CSSTransition } from 'react-transition-group'
import styled from 'styled-components'

import TwitterImage from './ImageComponents/TwitterImage'
import FacebookImage from './ImageComponents/FacebookImage'
import InstagramImage from './ImageComponents/InstagramImage'

const Footer = styled.div`
  background-color: lightgrey;
  width: 100%;
  flex-shrink: 1;
  display: grid;
  grid-gap: 10px;
  padding-left: 10vw;
  grid-auto-rows: minmax(60px, auto);
  grid-template-areas:
    '. hd . . scl .'
    '. form form form . .';
  grid-template-columns: 0.5fr 0.7fr 0.7fr 0.7fr 0.25fr 1fr;
  @media screen and (max-width: 1270px) {
    grid-template-areas:
      'hd'
      'form'
      'scl';
    grid-template-columns: 1fr;
    grid-gap: 10px;
    padding-left: 0;
    text-align: center;
    justify-content: center;
    grid-auto-rows: auto;
  }
`

const Heading = styled.h3`
  padding-top: 2vh;
  margin: 0;
  grid-area: hd;
  @media screen and (max-width: 1270px) {
    padding-left: 0;
    padding-top: 4vh;
  }
`

const SocialIcons = styled.div`
  display: inline-grid;
  padding-top: 2vh;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: minmax(30px, auto);
  grid-area: scl;
  @media screen and (max-width: 1270px) {
    justify-self: center;
    padding-top: 1vh;
    padding-bottom: 0;
  }
`
const FooterInput = styled.input`
  max-width: 80%;
  max-height: 2rem;
  padding: 10px 10px;
  grid-area: ${props => props.gridArea};
  border: none;
  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: grey;
  }
  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: grey;
  }
  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: grey;
  }
  @media screen and (max-width: 1270px) {
    justify-self: center;
    min-width: 40%;
  }
`
const FooterSubmitButton = styled.button`
  max-height: 2rem;
  padding: 0px 0px;
  min-width: 30%;
  max-width: 10vw;
  font-size: 0.9em;
  @media screen and (max-width: 1270px) {
    justify-self: center;
  }
`

const Form = styled.form`
  display: inline-grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-area: form;
  grid-gap: 10px;
  @media screen and (max-width: 1270px) {
    grid-template-columns: 1fr;
    margin-bottom: 0;
  }
`
export default class PageFooter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      submitted: false,
      showSubmitSuccess: false,
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    this.setState({ submitted: true })
  }
  handleChange = e => {
    const { value, name } = e.target
    this.setState({ [name]: value })
  }
  render() {
    return (
      <Footer>
        <Heading>SIGN UP FOR NEWS</Heading>
        <Form onSubmit={this.handleSubmit}>
          <CSSTransition
            classNames="example"
            in={this.state.showSubmitSuccess}
            timeout={500}
            mountOnEnter
          >
            <p>Thanks for signing up!</p>
          </CSSTransition>
          <CSSTransition
            classNames="submitted"
            in={!this.state.submitted}
            timeout={500}
            unmountOnExit
            onExited={() => {
              this.setState({ showSubmitSuccess: true })
            }}
          >
            <FooterInput
              placeholder="Name:"
              value={this.state.name}
              name="name"
              type="text"
              required
              onChange={this.handleChange}
            />
          </CSSTransition>
          <CSSTransition
            classNames="submitted"
            in={!this.state.submitted}
            timeout={500}
            unmountOnExit
          >
            <FooterInput
              placeholder="Email:"
              type="email"
              name="email"
              value={this.state.email}
              required
              onChange={this.handleChange}
            />
          </CSSTransition>
          <CSSTransition
            classNames="submitted"
            in={!this.state.submitted}
            timeout={500}
            unmountOnExit
          >
            <FooterSubmitButton type="submit" row="3" key="footerButton">
              SUBMIT
            </FooterSubmitButton>
          </CSSTransition>
        </Form>

        <SocialIcons>
          <TwitterImage />
          <FacebookImage />
          <InstagramImage />
        </SocialIcons>
      </Footer>
    )
  }
}

import React from 'react'
import { CSSTransition } from 'react-transition-group'
import styled from 'styled-components'
import addToMailChimp from 'gatsby-plugin-mailchimp'

import TwitterImage from './ImageComponents/TwitterImage'
import FacebookImage from './ImageComponents/FacebookImage'
import InstagramImage from './ImageComponents/InstagramImage'

const Footer = styled.div`
  background-color: #003f6d;
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
  @media screen and (max-width: 1306px) {
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
  color: #f7b300;
  margin: 0;
  grid-area: hd;

  @media screen and (max-width: 1306px) {
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
  @media screen and (max-width: 1306px) {
    justify-self: center;
    padding-top: 1vh;
    padding-bottom: 10px;
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
  @media screen and (max-width: 1306px) {
    justify-self: center;
    min-width: 40%;
  }
`
const FooterSubmitButton = styled.button`
  font-family: 'Bourton-base-drop';
  max-height: 2rem;
  min-width: 40%;
  border: none;
  max-width: 6vw;
  font-size: 1.1em;
  background-color: #f7b300;
  box-shadow: 1px 1px 3px black;
  cursor: pointer;
  border-radius: 3px;
  -webkit-transition: 0.15s ease-in-out !important;
  transition: 0.15s ease-in-out !important;
  @media screen and (max-width: 1306px) {
    justify-self: center;
  }
  :hover {
    color: white;
    text-shadow: 1px 1px 10px #fff, 1px 1px 10px #ccc;
  }
`

const Form = styled.form`
  display: inline-grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-area: form;
  grid-gap: 10px;
  @media screen and (max-width: 1306px) {
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
      message: '',
    }
  }

  handleSubmit = async e => {
    e.preventDefault()
    const { email, name } = this.state
    const { result, msg } = await addToMailChimp(email, { NAME: name })
    console.log(result, msg)
    const message = result === 'success' ? msg : 'Oops, something went wrong'
    this.setState({ submitted: true, message })
  }
  handleChange = e => {
    const { value, name } = e.target
    this.setState({ [name]: value })
  }
  render() {
    return (
      <Footer data-cy="footer">
        <Heading>SIGN UP FOR NEWS</Heading>
        <Form onSubmit={this.handleSubmit}>
          <CSSTransition
            classNames="example"
            in={this.state.showSubmitSuccess}
            timeout={500}
            mountOnEnter
          >
            <p style={{ color: '#f7b300' }} data-cy="footer-message">
              {this.state.message}
            </p>
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
              data-cy="footer-name"
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
              data-cy="footer-email"
            />
          </CSSTransition>
          <CSSTransition
            classNames="submitted"
            in={!this.state.submitted}
            timeout={500}
            unmountOnExit
          >
            <FooterSubmitButton
              type="submit"
              row="3"
              key="footerButton"
              data-cy="footer-submit"
            >
              <strong>SUBMIT</strong>
            </FooterSubmitButton>
          </CSSTransition>
        </Form>

        <SocialIcons data-cy="footer-icons">
          <TwitterImage />
          <FacebookImage />
          <InstagramImage />
        </SocialIcons>
      </Footer>
    )
  }
}

import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'
import Header from '../components/header'
import CroonersLogo from '../components/ImageComponents/CroonersLogo'

const SubHeading = styled.h2`
  color: #f7b300;
`

const Content = styled.div`
  padding: 5%;
  text-align: center;
`

const Logo = styled.div`
  width: 30vw;
  margin: auto;
  padding-top: 10vh;
  @media screen and (max-width: 1024px) {
    padding-top: 2%;
  }
  @media screen and (max-width: 650px) {
    width: 80%;
  }
`

const About = ({ location }) => (
  <StaticQuery
    query={graphql`
      query {
        allContentfulAboutCrooners {
          edges {
            node {
              content {
                childMarkdownRemark {
                  html
                }
              }
            }
          }
        }
        allContentfulTheStory {
          edges {
            node {
              theStory {
                childMarkdownRemark {
                  html
                }
              }
            }
          }
        }
      }
    `}
    render={({ allContentfulAboutCrooners, allContentfulTheStory }) => (
      <Layout about pathname={location.pathname}>
        <Header page="About" />
        <Logo>
          <CroonersLogo />
        </Logo>
        <Content>
          <SubHeading>ABOUT CROONERS</SubHeading>
          <div
            dangerouslySetInnerHTML={{
              __html:
                allContentfulAboutCrooners.edges[0].node.content
                  .childMarkdownRemark.html,
            }}
          />
          <SubHeading>THE STORY</SubHeading>
          <div
            dangerouslySetInnerHTML={{
              __html:
                allContentfulTheStory.edges[0].node.theStory.childMarkdownRemark
                  .html,
            }}
          />
        </Content>
      </Layout>
    )}
  />
)

export default About

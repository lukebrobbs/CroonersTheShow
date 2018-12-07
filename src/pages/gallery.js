import React, { Component } from 'react'
import styled from 'styled-components'
import Carousel from '../components/Carousel'
import { StaticQuery, graphql } from 'gatsby'
import Header from '../components/header'
import CroonersLogo from '../components/ImageComponents/CroonersLogo'
import Layout from '../components/layout'

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

const Title = styled.h2`
  padding-top: 0.5em;
  margin: auto;
  text-align: center;
`

const GalleryWrapper = styled.div`
  @media screen and (max-width: 1166px) {
    width: 90vw;
  }
`
class Gallery extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nav1: null,
      nav2: null,
    }
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    })
  }
  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            allContentfulGalleryImages {
              edges {
                node {
                  image {
                    fluid(maxWidth: 1200) {
                      src
                    }
                  }
                }
              }
            }
          }
        `}
        render={({ allContentfulGalleryImages: { edges } }) => {
          const content = edges[0].node.image.map(singleImage => (
            <div key={singleImage.fluid.src}>
              <img
                className="Slider-inner-image"
                src={singleImage.fluid.src}
                alt="Croners on stage"
              />
            </div>
          ))
          return (
            <Layout>
              <Header page="Gallery" />
              <Logo>
                <CroonersLogo />
              </Logo>
              <GalleryWrapper>
                <Title>Production Photos</Title>
                <Carousel content={content} />
                <Title>videos</Title>
                <Carousel content={content} />
              </GalleryWrapper>
            </Layout>
          )
        }}
      />
    )
  }
}

export default Gallery

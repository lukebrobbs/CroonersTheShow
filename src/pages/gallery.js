import React, { Component } from 'react'
import styled from 'styled-components'
import Carousel from '../components/Carousel'
import { StaticQuery, graphql } from 'gatsby'
import Header from '../components/header'
import CroonersLogo from '../components/ImageComponents/CroonersLogo'
import Layout from '../components/layout'
import GalleryVideo from '../components/GalleryVideo'

const Logo = styled.div`
  width: 30vw;
  margin: auto;
  margin-top: 5%;
  padding-top: 10vh;
  @media screen and (max-width: 1024px) {
    padding-top: 2%;
  }
  @media screen and (max-width: 650px) {
    width: 80%;
  }
`
const Video = styled.div`
  padding: 32.71% 0 0 0;
  position: relative;
  margin: 5% 0;
  @media screen and (max-width: 700px) {
    padding: 62.71% 0 0 0;
    margin: 0;
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
  constructor (props) {
    super(props)
    this.state = {
      nav1: null,
      nav2: null
    }
    this.touchStart = this.touchStart.bind(this)
    this.preventTouch = this.preventTouch.bind(this)
  }

  componentDidMount () {
    if (typeof window !== 'undefined') {
      window.addEventListener('touchstart', this.touchStart)
      window.addEventListener('touchmove', this.preventTouch, {
        passive: false
      })
    }
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    })
  }

  componentWillUnmount () {
    if (typeof window !== 'undefined') {
      window.removeEventListener('touchstart', this.touchStart)
      window.removeEventListener('touchmove', this.preventTouch, {
        passive: false
      })
    }
  }

  touchStart (e) {
    this.firstClientX = e.touches[0].clientX
    this.firstClientY = e.touches[0].clientY
  }

  preventTouch (e) {
    const minValue = 5 // threshold

    this.clientX = e.touches[0].clientX - this.firstClientX
    this.clientY = e.touches[0].clientY - this.firstClientY

    // Vertical scrolling does not work when you start swiping horizontally.
    if (Math.abs(this.clientX) > minValue) {
      e.preventDefault()
      e.returnValue = false
      return false
    }
  }
  render () {
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
            allContentfulVideos {
              edges {
                node {
                  video
                }
              }
            }
          }
        `}
        render={({
          allContentfulGalleryImages: { edges },
          allContentfulVideos
        }) => {
          const content = edges[0].node.image.map((singleImage, index) => (
            <div key={`${ singleImage.fluid.src }${ index }`}>
              <img
                className="Slider-inner-image"
                src={singleImage.fluid.src}
                alt="Croners on stage"
              />
            </div>
          ))
          const videos = allContentfulVideos.edges.map(video => {
            return (
              <Video key={video}>
                <GalleryVideo url={video.node.video} />
              </Video>
            )
          })
          return (
            <Layout pathname={this.props.location.pathname}>
              <Header page="Gallery" />
              <Logo>
                <CroonersLogo />
              </Logo>
              <GalleryWrapper>
                <Title>Production Photos</Title>
                <Carousel content={content} />
                <Title>videos</Title>
                {videos}
              </GalleryWrapper>
            </Layout>
          )
        }}
      />
    )
  }
}

export default Gallery

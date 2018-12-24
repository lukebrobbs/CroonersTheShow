import React, { Component } from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'

const SliderWrapper = styled.div`
  padding: 2% 5% 2%;
  width: 80%;
  margin: auto;
  @media screen and (max-width: 500px) {
    width: 100%;
    padding: 2% 0% 2%;
  }
  .Slider-inner-image {
    border: 3px solid #f7b300;
    width: 90%;
    margin: auto;
  }
  .slick-dots li.slick-active button:before {
    color: #f7b300;
  }
  .slick-dots li button:before {
    color: #f7b300;
  }
  .slick-dots li button {
    :hover {
      color: #f7b300;
    }
  }
  .slick-dots li button:focus {
    color: #f7b300;
  }
  .slick-prev:before,
  .slick-next:before {
    color: #f7b300;
  }

  .Slider-inner {
    padding-bottom: 2%;
  }
  .Slider-inner-bottom {
    padding: 1%;
    @media screen and (max-width: 500px) {
      visibility: hidden;
    }
  }
`

class Gallery extends Component {
  constructor (props) {
    super(props)
    this.state = {
      nav1: null,
      nav2: null
    }
  }

  componentDidMount () {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    })
  }
  render () {
    const responsive = [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          dots: true
        }
      }
    ]
    return (
      <SliderWrapper>
        <Slider
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
          className="Slider-inner"
          responsive={responsive}
        >
          {this.props.content}
        </Slider>
        <Slider
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          slidesToShow={5}
          swipeToSlide={true}
          focusOnSelect={true}
          className="Slider-inner-bottom"
          responsive={responsive}
        >
          {this.props.content}
        </Slider>
      </SliderWrapper>
    )
  }
}

export default Gallery

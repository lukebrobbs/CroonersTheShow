import React from 'react'
import styled from 'styled-components'

const Background = styled.div`
  width: 130px;
  margin-top: 10px;
  height: 30px;
  font-size: 20px;
  background-color: #94001c;
  border-radius: 3px;
  color: rgb(250, 160, 46);
  transform: rotate(10deg);
  position: relative;
  transition: 0.3s;
  :hover {
    color: rgb(252, 210, 69);

    div {
      transition: 0.3s;
      background-color: white;
      text-shadow: 1px 1px 10px #fff, 1px 1px 10px #ccc;
    }
  }
`

const Dot = styled.div`
  position: absolute;
  top: ${ props => props.top || 0 };
  left: ${ props => props.left || 0 };
  bottom: ${ props => props.bottom || 0 };
  height: 3px;
  width: 3px;
  background-color: #ccc;
  border-radius: 50%;
`

const generateDots = () => {
  let left = 6
  let top = 4
  let returnValue = []
  for (left; left <= 93; left += 5) {
    returnValue.push(<Dot top="1px" left={`${ left }%`} />)
    returnValue.push(<Dot top="83%" left={`${ left }%`} />)
  }
  returnValue.push(<Dot top="83%" left="2%" />)
  returnValue.push(<Dot top="83%" left="95%" />)

  for (top; top <= 66; top += 20) {
    returnValue.push(<Dot left="2%" top={`${ top }%`} />)
    returnValue.push(<Dot left="95%" top={`${ top }%`} />)
  }
  return returnValue
}

const BookNowNav = () => {
  return (
    <Background>
      {generateDots()}
      BOOK NOW!
    </Background>
  )
}

export default BookNowNav

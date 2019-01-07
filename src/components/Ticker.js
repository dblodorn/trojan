import React, { Component } from 'react'
import styled from 'styled-components'
import Marquee3k from 'marquee3000'
import { flexRowCenteredVert, animationFadeIn } from './../styles/mixins'
import { colors, fonts } from './../styles/theme'

const copy = `Artists soon Come. <span class="squiggle"></span> Artists soon Come <span class="dots"></span>`

export default class extends Component {
  componentDidMount() {
    setTimeout(() => {
      Marquee3k.init()
    }, 0);
  }
  render() {
    return (
      <TickerTape>
        <div className="marquee3k" data-speed="0.5" >
          <h1 dangerouslySetInnerHTML={{ __html: copy }}/>
        </div>
      </TickerTape>
    )
  }
}

const TickerTape = styled.div`
  ${animationFadeIn(2500, 100)};
  z-index: 9000;
  width: 100vw;
  flex: 1;
  position: fixed;
  bottom: 10rem;
  left: 0;
  h1 {
    font-size: 2.5rem;
    letter-spacing: 2px;
    line-height: 1.1;
    color: ${colors.yellow};
    ${flexRowCenteredVert};
    font-family: ${fonts.fakt};
    text-transform: uppercase;
  }
  .squiggle {
    display: inline-block;
    width: 25vw;
    height: 1.75rem;
    background-image: url('assets/imgs/squiggle.svg');
    background-repeat: repeat-x;
    margin: 0 3rem;
  }
  .dots {
    display: inline-block;
    width: 25vw;
    height: 1.75rem;
    background-image: url('assets/imgs/dots.svg');
    background-repeat: repeat-x;
    margin: 0 3rem;
  }
  .marquee3k__copy {
    box-sizing: border-box;
  }
`

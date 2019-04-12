import React, { Component } from 'react'
import styled from 'styled-components'
import Marquee3k from 'marquee3000'
import { flexRowCenteredVert, animationFadeIn } from './../styles/mixins'
import { colors, fonts } from './../styles/theme'

export default class extends Component {
  componentDidMount() {
    setTimeout(() => {
      Marquee3k.init()
    }, 10);
  }
  render() {
    return (
      <TickerTape>
        <div className="marquee3k" data-speed="0.5" >
          <p dangerouslySetInnerHTML={{ __html: `${this.props.copy} - ` }}/>
        </div>
      </TickerTape>
    )
  }
}

const TickerTape = styled.div`
  ${animationFadeIn(2500, 100)};
  z-index: 9000;
  width: 100%;
  flex: 1;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  background-color: ${colors.red};
  border: 2px solid ${colors.black};
  transform: rotate(-2deg);
  p {
    font-size: 1.35rem;
    letter-spacing: 2px;
    line-height: 1;
    color: ${colors.yellow};
    ${flexRowCenteredVert};
    font-family: ${fonts.akzidenz};
    font-weight: 500;
    text-transform: uppercase;
  }
  .marquee3k__copy {
    box-sizing: border-box;
  }
`

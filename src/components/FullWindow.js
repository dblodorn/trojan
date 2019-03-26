import React from 'react'
import styled, { css } from 'styled-components'
import { connect } from 'react-redux'

const FullWindow = props =>
	<FullWindowWrapper height={props.wh} zindex={props.zIndex || 10} position={props.position || 'fixed'} bgcolor={props.bgcolor || 'transparent'}>
		{props.children}
	</FullWindowWrapper>

export default connect(
	state => ({
		wh: state.resizeState.window_height,
	})
)(FullWindow)

const overflow = (props) => {
	if (props) {
		return css`
      overflow-y: scroll;
      overflow-x: hidden;
    `
	} else {
		return css`
      overflow: hidden;
    `
	}
}
const FullWindowWrapper = styled.aside`
  height: ${props => props.height}px;
  z-index: ${props => props.zindex};
  position: ${props => props.position};
  background-color: ${props => props.bgcolor};
  top: 0;
  left: 0;
  width: 100vw;
  ${overflow(false)};
`
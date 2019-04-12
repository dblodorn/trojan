import React from 'react'
import styled from 'styled-components'

export default () => <LoadingDiv/>

const LoadingDiv = styled.div`
	display: none;
	position: fixed;
	top: -1000px;
	left: -1000px;
	height: 0;
	width: 0;
`
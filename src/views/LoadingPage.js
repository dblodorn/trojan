import React from 'react'
import styled from 'styled-components'
import { fullWindow, flexCenteredAll } from './../styles/mixins'
import { Logo } from './../components'

export default () =>
  <LoadingWrapper>
    <Logo size={`30vmin`}/>
  </LoadingWrapper>

// STYLES
const LoadingWrapper = styled.div`
  ${fullWindow};
  ${flexCenteredAll};
`

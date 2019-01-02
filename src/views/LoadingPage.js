import React from 'react'
import styled from 'styled-components'
import { fullWindow, flexCenteredAll } from './../styles/mixins'

export default () =>
  <LoadingWrapper>
    <h1>Loading</h1>
  </LoadingWrapper>

// STYLES
const LoadingWrapper = styled.div`
  ${fullWindow};
  ${flexCenteredAll};
`

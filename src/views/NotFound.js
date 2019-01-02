import React from 'react'
import styled from 'styled-components'
import { Head } from './../components'
import { H1 } from './../styles/components'
import { flexCenteredAll } from './../styles/mixins'

export default () =>
  <NotFoundSection>
    <Head Title={'Page Not Found'}/>
    <H1>😢 404 Page Not Found 😢</H1>
  </NotFoundSection>

const NotFoundSection = styled.section`
  ${flexCenteredAll};
  height: 100vh;
`
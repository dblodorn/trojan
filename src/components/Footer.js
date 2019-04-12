import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { flexRow } from './../styles/mixins'
import FacebookLogo from './social/FacebookLogo'
import InstaLogo from './social/InstaLogo'

const Footer = (props) => 
  <FooterWrapper>
    {props.api_data &&
      <SocialWrapper>
        <li><FacebookLogo link={props.api_data.options.facebook} /></li>
        <li><InstaLogo link={props.api_data.options.instagram} /></li>
      </SocialWrapper>
    }
  </FooterWrapper>

export default connect(
  state => ({
    api_data: state.apiData
  })
)(Footer)

const FooterWrapper = styled.footer`
  width: 100vw;
  position: fixed;
  bottom: 0;
  left: 0;
`

const SocialWrapper = styled.ul`
  ${flexRow};
  justify-content: center;
  padding: 1.5rem;
  li {
    position: relative;
    width: 2rem;
    height: 2rem;
    margin-right: 2rem;
    display: block;
    &:last-child {
      margin-right: 0;
    }
  }
`

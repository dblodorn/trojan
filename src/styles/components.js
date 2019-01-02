import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { spacing, colors, widths } from './theme'
import * as _ from './mixins'

// TYPE
const H1 = styled.h1`
  ${_.bigType};
  padding-bottom: ${spacing.single_pad};
  color: ${colors.black};
`

const H2 = styled.h2`
  ${_.mediumType};
  color: ${colors.black};
`

const H3 = styled.h3`
  ${_.bodyType};
  padding-bottom: ${spacing.small_pad};
  color: ${colors.black};
`

const H4 = styled.h4`
  ${_.bodyType};
  padding-bottom: ${spacing.small_pad};
  color: ${colors.black};
`

const H5 = styled.h5`
  ${_.bodyType};
  padding-bottom: ${spacing.small_pad};
  color: ${colors.black};
`

const H6 = styled.h6`
  ${_.bodyType};
  padding-bottom: ${spacing.small_pad};
`

const P = styled.p`
  ${_.bodyType};
`

const SmallP = styled.p`
  ${_.smallType};
`

const StyledMarkup = styled.div`
  &.pad-top {
    padding-top: ${spacing.double_pad};
  }
  h1 {
    ${_.bigType};
  }
  h2 {
    ${_.mediumType};
  }
  h3 {
    ${_.bodyType};
  }
  h4 {
    ${_.bodyType};
  }
  h5 {
    ${_.bodyType};
  }
  h6 {
    ${_.bodyType};
  }
  p {
    ${_.bodyType};
    margin-bottom: ${spacing.single_pad};
    max-width: ${widths.max_large};
    &:last-child {
      margin-bottom: 0;
    }
  }
  a {
    ${_.defaultLink};
  }
`

// UI
const StyledLink = styled(Link)`
  ${_.defaultLink};
  
`

const ExternalLink = styled.a`
  ${_.defaultLink};
  ${_.mediumType};
`

const SocialLink = styled.a`
  ${_.flexCenteredAll};
  width: ${props => props.size || `4rem`};
  height: ${props => props.size || `4rem`};
  svg {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`

// WRAPPERS
const ModalWrapper = styled.div`
  ${_.flexCenteredAll};
  position: fixed;
  z-index: 1000;
  width: 100vw;
  height: 100vh;
`

const ModalContentWrapper = styled.div`
  ${_.flexCenteredAll};
  max-height: ${props => props.maxHeight};
  width: 100%;
  height: 100%;
  max-width: 100rem;
  position: relative;
  z-index: 1000;
`

const CloseButton = styled.button`
  ${_.buttonInit};
  position: fixed;
  width: ${props => props.size || `4rem`};
  height: ${props => props.size || `4rem`};
  top: ${props => props.position || `.75rem`};
  right: ${props => props.position || `.75rem`};
  padding: 0;
  z-index: 11000;
  cursor: pointer;
  svg {
    ${_.absoluteCentered};
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  P,
  SmallP,
  StyledMarkup,
  SocialLink,
  StyledLink,
  ExternalLink,
  ModalWrapper,
  ModalContentWrapper,
  CloseButton
}
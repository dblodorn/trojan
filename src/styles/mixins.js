import { css, keyframes } from 'styled-components'
import { spacing, fonts, shared, breakpoints, colors, widths, heights, font_sizes_rem } from './theme'

// Media Queries
const media = {
  small: (...args) => css`
    @media (max-width: 500px) {
      ${ css(...args) }
    }
  `,
  medium: (...args) => css`
    @media (min-width: ${breakpoints.medium}px) {
      ${ css(...args) }
    }
  `,
  tablet: (...args) => css`
    @media (max-width: ${breakpoints.tablet_w}px) and (min-height: ${breakpoints.table_h}px) {
      ${ css(...args)}
    }
  `,
  desktopNav: (...args) => css`
    @media (min-width: ${breakpoints.desktop}px) {
      ${ css(...args) }
    }
  `,
  desktop: (...args) => css`
    @media (min-width: ${breakpoints.desktop}px) {
      ${ css(...args)}
    }
  `,
  big: (...args) => css`
    @media (min-width: ${breakpoints.big}px) {
      ${ css(...args) }
    }
  `,
  touch: (...args) => css`
    @media (hover: none) {
      ${ css(...args) }
    }
  `
}

// Layout & Positioning UTILS
const maxWidth = css`
  width: 100%;
  max-width: ${widths.max_width};
`

const absoluteCentered = css`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
`

const fixedTopLeft = css`
  position: fixed;
  top: 0;
  left: 0;
`

const mainPadding = css`
  padding: ${spacing.double_pad};
`

const scrollPanel = css`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  overflow-x: hidden;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
`

// TYPOGRAPHY
const sansFont = css`
  font-family: ${fonts.akizdenz};
  font-weight: 400;
`

const bigType = css`
  ${sansFont};
  font-size: ${font_sizes_rem.giant};
  line-height: 1;
  text-transform: uppercase;
  letter-spacing: 2px;
`

const mediumType = css`
  ${sansFont};  
  font-size: ${font_sizes_rem.medium_sm};
  line-height: 1;
  ${media.medium`
    font-size: ${font_sizes_rem.medium};
  `}
`

const bodyType = css`
  ${sansFont};
  font-size: ${font_sizes_rem.body_sm};
  line-height: 1.35;
  ${media.medium`
    font-size: ${font_sizes_rem.body};
  `}
`

const smallType = css`
  ${sansFont};
  font-size: ${font_sizes_rem.small};
  line-height: 1.25;
`

const microType = css`
  font-family: ${fonts.display_font_a};
  font-weight: 500;
  font-size: ${font_sizes_rem.micro};
  line-height: 1.25;
  letter-spacing: 1px;
`

const linkInit = css`
  text-decoration: none;  
  &:hover {
    text-decoration: none;
  }
`

const defaultLink = css`
  ${sansFont};
  ${bodyType};
  -webkit-tap-highlight-color: rgba(255,255,255,0);
  text-decoration: none;
  color: ${colors.black};
  cursor: pointer;
  display: block;
  position: relative;
  span {
    position: relative;
    z-index: 10;
    display: block;
  }
  &.active {}
  &:hover {
    color: ${colors.pink};
  }
`

const opacityTransition = css`
  transition: opacity 250ms ease-in-out;
  will-change: opacity;
`

// STYLE UTILS
const buttonInit = css`
  -webkit-tap-highlight-color: rgba(255,255,255,0);
  -webkit-appearance: none;
  border: 0;
  background-color: rgba(255,255,255,0);
  border-radius: 0;
  appearance: none;
  cursor: pointer;
  display: block;
`

const shadow = css`
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.2);
`

// Flex Layout
const flexColumn = css`
  display: flex;
  flex-direction: column;
`
const flexColumnCentered = css`
  ${flexColumn};
  align-items: center;
`

const flexRow = css`
  display: flex;
  flex-direction: row;
`

const flexRowWrap = css`
  ${flexRow};
  flex-wrap: wrap;
`

const flexRowCenteredVert = css`
  ${flexRow};
  align-items: center;
`

const flexRowCenteredAll = css`
  ${flexRowCenteredVert};
  justify-content: center;
`

const flexCenteredAll = css`
  display: flex;
  align-items: center;
  justify-content: center;
`

const flexRowSpaceBetween = css`
  ${flexRow};
  justify-content: space-between;
`

// Animation
const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const spinRev = keyframes`
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
`

const animationRotate = (time) => {
  const this_time = time ? time : 1200;
  return css`
    animation: ${spin} ${this_time}ms linear 0s infinite normal;
    animation-fill-mode: forwards;
  `
}

const animationRotateRev = (time) => {
  const this_time = time ? time : 1200;
  return css`
    animation: ${spinRev} ${this_time}ms linear 0s infinite normal;
    animation-fill-mode: forwards;
  `
}

const simpleFade = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const animationFadeIn = (time, delay) => {
  return css`
    animation: ${simpleFade} ${time}ms ease normal;
    animation-delay: ${delay}ms;
    animation-fill-mode: both;
  `
}

const borderRadius = (radius) => {
  return css`
    border-radius: ${radius}!important;
  `
}

const textShadow = (blur, color) => {
  return css`
    text-shadow: 2px 2px ${blur}px ${color};
  `
}

const fullWindow = css`
  display: flex;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
`

const absoluteTopFull = css`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`

const albumImage = css`
  display: flex;
  height: 100%;
  position: relative;
  padding: 2rem;
  background-image: url('assets/imgs/record-bg.svg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  .album-image {
    width: 100%;
    height: 0;
    overflow-y: visible;
    padding-bottom: 100%;
    position: relative;
  }
`

const fancyScroll = css`
  &::-webkit-scrollbar {
    width: 4px;
    border-left: 0;
    position: absolute;
    z-index: 10000;
    display: block;
  }
  &::-webkit-scrollbar-track {
    background: ${colors.red};
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${colors.green};
    width: 4px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: ${colors.blue};
    width: 4px;
    cursor: pointer;
  }
`

export {
  media,
  maxWidth,
  albumImage,
  absoluteCentered,
  fixedTopLeft,
  mainPadding,
  scrollPanel,
  bigType,
  mediumType,
  bodyType,
  smallType,
  microType,
  defaultLink,
  buttonInit,
  shadow,
  animationRotate,
  animationFadeIn,
  flexColumn,
  flexColumnCentered,
  flexRow,
  flexRowWrap,
  flexRowCenteredVert,
  flexRowSpaceBetween,
  flexRowCenteredAll,
  flexCenteredAll,
  borderRadius,
  fullWindow,
  absoluteTopFull,
  opacityTransition,
  textShadow,
  linkInit,
  animationRotateRev,
  sansFont,
  fancyScroll
}
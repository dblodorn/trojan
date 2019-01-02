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
  font-family: ${fonts.sans};
  font-weight: 400;
`

const monoFont = css`
  font-family: ${fonts.mono};
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
  letter-spacing: 2px;
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

const monoP = css`
  ${monoFont};
  font-size: 1.5rem;
  line-height: 1.125;
  ${media.medium`
    font-size: 1.35rem;
  `}
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

const transitionAll = (time) => {
  return css`
    transition-property: all;
    transition-duration: ${time}ms;
    transition-timing-function: ease;
  `
}

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
const pulse = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const animationRotate = css`
  animation: ${spin} 700ms linear 0s infinite normal;
  animation-fill-mode: forwards;
`

const simpleFade = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const pulseAnimation = css`
  animation: 350ms linear ${pulse} infinite;
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

const fullBg = css`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`

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

const positionClasses = css`
  display: flex;
  flex-direction: column;
  &.centered {
    align-items: center;
    justify-content: center;
  }
  &.centered_right {
    align-items: flex-end;
    justify-content: center;
  }
  &.top_right {
    align-items: flex-end;
    justify-content: flex-start;
  }
  &.bottom_right {
    align-items: flex-end;
    justify-content: flex-end;
  }
  &.centered_left {
    align-items: flex-start;
    justify-content: center;
  }
  &.top_left {
    align-items: flex-start;
    justify-content: flex-start;
  }
  &.bottom_left {
    align-items: flex-start;
    justify-content: flex-end;
  }
`

const wrapperWidths = css`
  width: 100%;
  margin: 0 auto;
  &.full_width {
    max-width: 100%;
  }
  &.max_large {
    max-width: ${widths.max_large};
  }
  &.max_medium {
    max-width: ${widths.max_medium};
  }
  &.max_small {
    max-width: ${widths.max_small};
  }
`

const grid = css`
  flex-grow: 0;
  flex-shrink: 0;
  li {
    width: 50%;
    position: relative;
  }
  ${media.desktopNav`
    &.one_col > li {
      width: 100%;
    }
    &.three_col > li {
      width: calc(100% / 3);
    }
    &.four_col > li {
      width: calc(100% / 4);
    }
    &.two_col > li {
      width: 50%;
    }
  `}
  ${media.big`
    &.four_col > li {
      width: calc(100% / 5);
    }
  `}
`

const fancyScroll = css`
  &::-webkit-scrollbar {
    width: 1rem;
    border-left: ${shared.border_thin};
    position: absolute;
    z-index: 9000;
    display: none;
  }
  &::-webkit-scrollbar-track {
    border-left: ${shared.border_thin};
    background: ${colors.white};
    width: 1rem;
  }
  &::-webkit-scrollbar-thumb {
    background: ${colors.green};
    border-left: ${shared.border_thin};
    width: 1rem;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: ${colors.grey};
    width: 1rem;
    cursor: pointer;
  }
`

const fixedHero = (top, bottom, left) => {
  return css`
    &.fixed-hero {
      margin: 0;
      max-height: 100vh;
      height: 100vh;
      overflow: hidden;
      ${media.desktopNav`
        padding-bottom: ${bottom};
        padding-top: ${top};
        padding-left: ${left};
        position: fixed;
        top: 0;
        height: 100vh;
      `}
    }
  `
}

const fixedWindow = css`
  ${fancyScroll};
  padding: ${heights.header} 0 ${heights.footer};
  width: 50vw;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 100;
  overflow-x: hidden;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  article {
    padding-top: ${spacing.double_pad};
    padding-bottom: ${heights.footer};
  }
`

export {
  media,
  maxWidth,
  absoluteCentered,
  fixedTopLeft,
  mainPadding,
  scrollPanel,
  bigType,
  mediumType,
  bodyType,
  smallType,
  microType,
  monoP,
  defaultLink,
  transitionAll,
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
  pulseAnimation,
  fullBg,
  grid,
  fullWindow,
  positionClasses,
  absoluteTopFull,
  opacityTransition,
  wrapperWidths,
  textShadow,
  fixedHero,
  halfFixed,
  fixedWindow,
  fancyScroll,
  linkInit,
}
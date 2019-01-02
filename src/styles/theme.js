
import { toRem } from './../scripts'
import { meta_defaults } from './../../config.json'

const units = {
  base_pad: 15,
  header: 80,
  footer: 80,
  max: 960,
}

const breakpoints = {
  mobile: 0,
  medium: 1200,
  desktop: 860,
  tablet_w: 960,
  tablet_h: 800,
  big: 1500,
}

const widths = {
  max_large: toRem(units.max * 1.25),
  max_medium: toRem(units.max),
  max_small: toRem(units.max * .75),
}

const heights = {
  header: toRem(units.header),
  mobile_header: toRem(units.header),
  footer: toRem(units.footer),
}

const spacing = {
  micro_pad: toRem(units.base_pad / 2),
  single_pad: toRem(units.base_pad),
  double_pad: toRem(units.base_pad * 2),
  big_pad: toRem(units.base_pad * 3),
}

const colors = {
  bg: meta_defaults.bgcolor,
  white: '#ffffff',
  black: '#000000',
}

const fonts = {
  sans: `'GintoNord', Arial, system-ui, sans-serif`,
}

const baseFontSize = 16

const font_sizes = {
  giant: 150,
  medium: 25,
  body: 20,
  small: 16,
  micro: 12,
}

const font_sizes_rem = {
  giant: toRem(font_sizes.giant),
  medium: toRem(font_sizes.medium),
  body: toRem(font_sizes.body),
  small: toRem(font_sizes.small),
  micro: toRem(font_sizes.micro),
}

const shared = {
  border_weight: '5px',
  logo_size_desk: '8rem',
  border_thin: '1px solid #180c06',
  border_thick: '3px solid #180c06',
}

export {
  units,
  breakpoints,
  widths,
  heights,
  spacing,
  colors,
  fonts,
  baseFontSize,
  font_sizes,
  font_sizes_rem,
  shared
}

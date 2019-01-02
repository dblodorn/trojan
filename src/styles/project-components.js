import styled from 'styled-components'
import { colors } from './theme.json'
import * as _ from './mixins'

const Block = styled.div`
  width: 1rem;
  height: 1rem;
  background-color: ${colors.black};
`

export {
  Block
}
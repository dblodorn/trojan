import { combineReducers } from 'redux'
import apiData from './r_api-data'
import { resizeState, fontsLoaded, touchState, scrollDirection, currentPixel, docHeight } from './r_window-state'
import { menuState, modalState, headerState } from './r_ui-state'
import { pageCount, routeState } from './r_content-state'

const rootReducer = combineReducers({
  apiData,
  pageCount,
  routeState,
  resizeState,
  fontsLoaded,
  touchState,
  scrollDirection,
  currentPixel,
  docHeight,
  menuState,
  headerState,
  modalState
})

export default rootReducer

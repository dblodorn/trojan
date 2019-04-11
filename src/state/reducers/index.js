import { combineReducers } from 'redux'
import apiData from './r_api-data'
import { resizeState, fontsLoaded, touchState, scrollDirection, currentPixel, docHeight } from './r_window-state'
import { menuState, modalState, headerState } from './r_ui-state'
import { pageCount, routeState, audioPlayingState } from './r_content-state'
import { artistPopup, currentArtist } from './r_artists'

const rootReducer = combineReducers({
  apiData,
  pageCount,
  artistPopup,
  currentArtist,
  routeState,
  resizeState,
  fontsLoaded,
  touchState,
  scrollDirection,
  currentPixel,
  docHeight,
  menuState,
  headerState,
  modalState,
  audioPlayingState
})

export default rootReducer

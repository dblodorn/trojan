import { breakpoints } from '../../styles/theme'

const resizeData = (resizeState) => {
  return {
    type: 'resizeState',
    resizeState
  }
}

export function fontsLoaded (bool) {
  return {
    type: 'fontsLoaded',
    bool
  }
}

export function hasTouch (bool) {
  return {
    type: 'HAS_TOUCH',
    bool
  }
}

export function setResizeState() {
  return (dispatch) => {
    dispatch(resizeData({
      window_width: window.innerWidth,
      window_height: window.innerHeight,
      breakpoints: breakpoints
    }))
  }
}

export function setScrollDirection(string) {
  return {
    type: 'SCROLL_DIRECTION',
    string
  };
}

export function setCurrentPixel (number) {
  return {
    type: 'SCROLL_PIXEL',
    number
  };
}

export function setDocHeight(number) {
  return {
    type: 'DOCUMENT_HEIGHT',
    number
  };
}

export function resizeState(state = {}, action) {
  switch (action.type) {
    case 'resizeState':
      return action.resizeState
    default:
      return state
  }
}

export function fontsLoaded(state = false, action) {
  switch (action.type) {
    case 'fontsLoaded':
      return action.bool
    default:
      return state
  }
}

export function touchState(state = false, action) {
  switch (action.type) {
    case 'HAS_TOUCH':
      return action.bool
    default:
      return state
  }
}

export function scrollDirection(state = 'top', action) {
  switch (action.type) {
    case 'SCROLL_DIRECTION':
      return action.string;
    default:
      return state;
  }
}

export function currentPixel(state = 0, action) {
  switch (action.type) {
    case 'SCROLL_PIXEL':
      return action.number;
    default:
      return state;
  }
}

export function docHeight(state = 0, action) {
  switch (action.type) {
    case 'DOCUMENT_HEIGHT':
      return action.number;
    default:
      return state;
  }
}

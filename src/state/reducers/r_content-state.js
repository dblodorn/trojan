export function pageCount(state = 0, action) {
  switch (action.type) {
    case 'pageCount':
      return action.count
    default:
      return state
  }
}

export function routeState(state = null, action) {
  switch (action.type) {
    case 'CURRENT_ROUTE':
      return action.route
    default:
      return state
  }
}

export function audioPlayingState(state = false, action) {
  switch (action.type) {
    case 'AUDIO_PLAYING':
      return action.bool
    default:
      return state
  }
}

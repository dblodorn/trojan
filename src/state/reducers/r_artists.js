export function artistPopup(state = false, action) {
  switch (action.type) {
    case 'ARTIST_POPUP':
      return action.bool
    default:
      return state
  }
}

export function currentArtist(state = false, action) {
  switch (action.type) {
    case 'CURRENT_ARTIST':
      return action.artist
    default:
      return state
  }
}

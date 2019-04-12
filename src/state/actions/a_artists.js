export function setArtistPopup(bool) {
  return {
    type: 'ARTIST_POPUP',
    bool
  }
}

export function setArtist(artist) {
  return {
    type: 'CURRENT_ARTIST',
    artist
  }
}
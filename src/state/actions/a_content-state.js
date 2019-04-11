export function setPageCount(count) {
  return {
    type: 'pageCount',
    count
  }
}

export function setRoute(route) {
  return {
    type: 'CURRENT_ROUTE',
    route
  }
}

export function setAudioPlaying(bool) {
  return {
    type: 'AUDIO_PLAYING',
    bool
  }
}
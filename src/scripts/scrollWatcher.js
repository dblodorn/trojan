import { store } from './../state/store'
import { setScrollDirection, setCurrentPixel, setDocHeight } from './../state/actions'

export default () => {
  
  const threshold = 15
  
  const directionHandler = (string) => {
    store.dispatch(setScrollDirection(string))
  }

  const documentHeight = () => {
    const html = document.querySelector('html')
    const doc = html.getBoundingClientRect().height - store.getState().resizeState.window_height
    return doc
  }

  store.dispatch(setCurrentPixel(0))

  let top = false
  let bottom = false
  let scrollPixel = window.pageYOffset
  let scrollTime = 0
  let api = false

  const looper = () => {
    const newPixel = window.pageYOffset
    const diff = newPixel - scrollPixel
    const speed = diff * 1.125
    const docHeight = documentHeight()
    
    if (store.getState().apiData !== false && !api) {
      store.dispatch(setDocHeight(documentHeight()))
      api = true
    }
    
    if (speed > diff) {
      scrollTime = scrollTime + 1
      if (scrollTime === threshold) {
        directionHandler('down')
        store.dispatch(setCurrentPixel(scrollPixel))
        store.dispatch(setDocHeight(docHeight))
        top = false
        bottom = false
      }
    } else if (speed < diff) {
      scrollTime = scrollTime + 1
      if (scrollTime === threshold) {
        directionHandler('up')
        store.dispatch(setDocHeight(docHeight))
        store.dispatch(setCurrentPixel(scrollPixel))
        top = false
        bottom = false
      }
    } else {
      scrollTime = 0
    }
    
    scrollPixel = newPixel
    
    if (scrollPixel === 0 && (store.getState().scroll_direction !== 'at-top')) {
      if (!top) {
        directionHandler('at-top')
        store.dispatch(setCurrentPixel(scrollPixel))
        store.dispatch(setDocHeight(docHeight))
        top = true
        bottom = false
      }
    } else if (scrollPixel === docHeight && (store.getState().scroll_direction !== 'at-bottom')) {
      if (!bottom) {
        directionHandler('at-bottom')
        store.dispatch(setCurrentPixel(scrollPixel))
        store.dispatch(setDocHeight(docHeight))
        top = false
        bottom = true
      }
    }
    requestAnimationFrame(looper)
  }
  looper()
}

import fetchWpDataController from '../../controllers/fetchWpDataController'
import NProgress from 'nprogress'

const apiData = (payload) => {
  return {
    type: 'apiData',
    payload
  }
}

export default () => {
  return (dispatch) => {
    NProgress.configure({ easing: 'ease', speed: 500 })
    NProgress.start()
    const _dataHandler = (payload) => {
      dispatch(apiData(payload))
      NProgress.done()
    }
    fetchWpDataController()
      .then(response => response.json())
      .then((payload) => _dataHandler(payload))
  }
}

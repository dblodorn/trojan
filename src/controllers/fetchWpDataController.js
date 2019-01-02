import fetch from 'isomorphic-fetch'
import config from './../../config.json'

export default () => {
  return new Promise((resolve, reject) => {
    fetch((process.env.NODE_ENV === 'development')
      ? config.wp_endpoint 
      : `data.${__webpack_hash__}.json`,
      { method: 'GET' })
        .then(res => resolve(res))
        .catch(err => reject(err))
  })
}
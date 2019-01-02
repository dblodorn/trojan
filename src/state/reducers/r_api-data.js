export default (state = false, action) => {
  switch (action.type) {
    case 'apiData':
      return action.payload
    default:
      return state
  }
}

const pageCount = (state = 0, action) => {
  switch (action.type) {
    case 'pageCount':
      return action.count
    default:
      return state
  }
}

const routeState = (state = null, action) => {
  switch (action.type) {
    case 'CURRENT_ROUTE':
      return action.route
    default:
      return state
  }
}

export {
  pageCount,
  routeState
}
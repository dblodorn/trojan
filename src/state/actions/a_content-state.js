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

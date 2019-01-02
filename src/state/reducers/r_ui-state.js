const menuState = (state = false, action) => {
  switch (action.type) {
    case 'MENU_STATE':
      return action.bool
    default:
      return state
  }
}

const headerState = (state = true, action) => {
  switch (action.type) {
    case 'HEADER_STATE':
      return action.bool
    default:
      return state
  }
}

const modalState = (state = false, action) => {
  switch (action.type) {
    case 'MODAL_STATE':
      return action.bool
    default:
      return state
  }
}

export {
  menuState,
  modalState,
  headerState
}

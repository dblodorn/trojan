export function setModalState(bool) {
  return {
    type: 'MODAL_STATE',
    bool
  }
}

export function setMenuState(bool) {
  return {
    type: 'MENU_STATE',
    bool
  }
}

export function setHeaderState(bool) {
  return {
    type: 'HEADER_STATE',
    bool
  }
}

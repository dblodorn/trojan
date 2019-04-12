import React from 'react'
import ReactDOM from 'react-dom'
const BgModalNode = document.getElementById('bg')

class Modal extends React.Component {
  constructor(props) {
    super(props)
    this.el = document.createElement('div')
  }
  componentDidMount() {
    BgModalNode.appendChild(this.el)
  }
  componentWillUnmount() {
    BgModalNode.removeChild(this.el)
  }
  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.el,
    )
  }
}

export default Modal

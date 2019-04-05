import React from 'react'
import ReactDOM from 'react-dom'
const TourModalNode = document.getElementById('tour')

class Modal extends React.Component {
  constructor(props) {
    super(props)
    this.tourel = document.createElement('div')
  }
  componentDidMount() {
    TourModalNode.appendChild(this.tourel)
  }
  componentWillUnmount() {
    TourModalNode.removeChild(this.tourel)
  }
  render() {
    return ReactDOM.createPortal(
      this.props.children,
			this.tourel,
    )
  }
}

export default Modal

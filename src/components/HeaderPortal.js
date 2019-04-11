import React from 'react'
import ReactDOM from 'react-dom'
const headerNode = document.querySelector('header')

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.el = document.createElement('div')
  }
  componentDidMount() {
    headerNode.appendChild(this.el)
  }
  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.el,
    )
  }
}
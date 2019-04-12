import React from 'react'
import { connect } from 'react-redux'

export default (InnerComponent) => {
	const apiData = (state) => {
		return (
			<InnerComponent
				{...state.apiData}
			/>
		)
	}
	return connect(
		state => ({
			apiData: state.apiData
		})
	)(apiData)
}
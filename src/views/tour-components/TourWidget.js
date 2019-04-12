import React from 'react'
import styled from 'styled-components'
import { colors } from './../../styles/theme'
import { fancyScroll } from './../../styles/mixins'

export default class TourWidget extends React.Component {
	constructor (props) {
		super(props)
		this.state = {
			tourData: false,
			isLoaded: false
		}
	}

	componentDidMount() {
		this.script = document.createElement('script');
		this.script.type = 'text/javascript';
		this.script.onload = () => {
			this.setState({
				tourData: this.props.tour_embed,
				isLoaded: true
			});
		};
		this.script.src = 'https://widget.bandsintown.com/main.min.js';
		document.getElementById('tour').appendChild(this.script);
	}
	componentWillUnmount() {
		document.getElementById('tour').removeChild(this.script);
	}
	render() {
		return (
			<TourWidgetWrapper>
				<a className="bit-widget-initializer" data-artist-name="yeah yeah yeahs" data-display-local-dates="false" data-display-past-dates="false" data-auto-style="false" data-text-color="#000" data-link-color="#000" data-popup-background-color="#fff" data-display-limit="15" data-link-text-color="#fff"></a>
			</TourWidgetWrapper>
		);
	}
}

const TourWidgetWrapper = styled.div`
  ${fancyScroll};
	width: 100%;
  max-width: 86rem;
  margin: auto;
  background-color: rgba(255,255,255,.125);
  border-radius: 0rem;
	height: 65vh;
	-webkit-overflow-scrolling: touch;
  overflow-y: scroll;
	border: 3px solid ${colors.green};
  .tour-widget {
    width: 100%;
		max-width: 65rem;
		opacity: 1;
		display: flex;
		position: relative;
		flex-direction: column;
		margin: 0 auto;
  }
`
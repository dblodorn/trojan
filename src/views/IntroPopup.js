import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { flexCenteredAll, sansFont, animationFadeIn } from './../styles/mixins'
import { colors, fonts } from './../styles/theme'
import { H1 } from './../styles/components'
import HoverBg from './../components/navigation/HoverBg'
import AlbumPhoto from './listen-components/AlbumPhoto'

const IntroPopup = props =>
  <IntroWrapper>
    <div className='intro-inner'>
			{props.apiData.options.intro_popup.popup_image &&
				<div className="image-wrapper">
					<AlbumPhoto image={props.apiData.options.intro_popup.popup_image}/>
				</div>
			}
			{props.apiData.options.intro_popup.popup_headline &&
				<Headline>{props.apiData.options.intro_popup.popup_headline}</Headline>
			}
			{props.apiData.options.intro_popup.popup_link &&
				<LinkWrapper>
					<a className='contact-link' href={props.apiData.options.intro_popup.popup_link} target="_blank">
						<span>{props.apiData.options.intro_popup.popup_link_cta || 'Learn More'}</span>
						<HoverBg color={colors.red} />
					</a>
				</LinkWrapper>
			}
		</div>
  </IntroWrapper>

export default connect(
  state => ({
    apiData: state.apiData
  })
)(IntroPopup)

const Headline = styled(H1)`
	text-align: center;
	font-size: 1.75rem;
`

const IntroWrapper = styled.div`
	${animationFadeIn(1000, 500)};
	width: 100%;
	height: 100%;
	padding: 3.5rem 5.5rem;
	position: relative;
	* {
		color: white!important;
	}
	${flexCenteredAll};
	.image-wrapper {
		width: 100%;
		max-width: 30rem;
		margin: 0 auto 1.5rem;
	}
	.intro-inner {
		width: 100%;
		max-width: 75rem;
		position: relative;
		z-index: 100;
	}
	.intro-copy {
		padding-top: 1.5rem;
		${sansFont};
		text-transform: none;
		font-size: 1.5rem;
		line-height: 1.3;
		margin: auto;
		text-align: center;
		max-width: 78rem;
	}
	.streaming-wrapper {
		padding-top: 2.5rem;
		position: relative;
		margin: auto;
		width: 100%;
	}
`

const LinkWrapper = styled.div`
  width: 100%;
  ${flexCenteredAll};
  position: relative;
  z-index: 100;
  .contact-link {
    ${flexCenteredAll};
    text-decoration: none;
    height: 5rem;
    width: 25rem;
    position: relative;
    will-change: transform;
    transition: transform 250ms ease-in-out;
    &:hover {
      transform: scale(1.05) rotate(2.5deg);
    }
  }
  span {
    position: relative;
    z-index: 100;
    color: ${colors.yellow};
    font-family: ${fonts.eurostile};
    font-weight: 600;
    text-transform: uppercase;
    padding-top: 5px;
  }
`

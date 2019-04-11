import React from 'react'
import apiData from './../apiData'
import styled from 'styled-components'
import { flexRow, media } from './../../styles/mixins'
import { FitImage } from '..';

export default apiData(props =>
	<SocialsWrapper>
		<li>
			<SocialLink href={props.options.facebook_link} target='_blank'>
				<FitImage src='/assets/logo-facebook.svg' fit={'contain'}/>
			</SocialLink>
		</li>
		<li>
			<SocialLink href={props.options.twitter_link} target='_blank'>
				<FitImage src='/assets/logo-twitter.svg' fit={'contain'} />
			</SocialLink>
		</li>
		<li>
			<SocialLink href={props.options.instagram_link} target='_blank'>
				<FitImage src='/assets/logo-instagram.svg' fit={'contain'} />
			</SocialLink>
		</li>
		<li>
			<SocialLink href={props.options.youtube_link} target='_blank'>
				<FitImage src='/assets/logo-youtube.svg' fit={'contain'} />
			</SocialLink>
		</li>
	</SocialsWrapper>
)

const SocialsWrapper = styled.ul`
	${flexRow};
	justify-content: center;
  width: 100%;
  max-width: 18rem;
	margin-left: 3rem;
	padding-left: 2rem;
	position: relative;
	z-index: 100;
	${media.desktop`
		margin-left: 0;
		margin-left: 0;
		padding-left: 0;
	`}
	li {
		width: 4rem;
		height: 2rem;
		will-change: transform;
		transition: transform 250ms ease-in-out;
		&:hover {
			transform: scale(1.05) rotate(-2.5deg);
		}
	}
`

const SocialLink = styled.a`
	display: block;
	width: 100%;
	height: 100%;
	position: relative;
`
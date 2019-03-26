import React from 'react'
import styled from 'styled-components'
import { absoluteCentered, flexCenteredAll } from './../../styles/mixins'
import { fonts } from './../../styles/theme'

export default props =>
	<HoverShape>
		<div className='span-wrapper'>
			<span>{props.title}</span>
		</div>
		<div className='shape-wrapper'>
			<svg width="60px" height="25px" viewBox="0 0 60 25" version="1.1" xmlns="http://www.w3.org/2000/svg">
					<g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
						<g id="hover-text" fill="#231F20">
							<g id="Fill-1">
								<path d="M5.1149,3.6115 C3.0349,3.3735 3.3319,3.8485 3.1679,5.1755 C2.9309,7.0905 2.3439,9.0975 1.8399,10.9905 C1.4099,12.6055 0.5799,13.9935 0.5149,15.6885 C0.4709,16.8485 0.5299,18.0225 0.5299,19.1845 C0.5299,20.3525 0.1969,21.8475 0.5169,22.9845 C0.8889,24.3035 1.3319,24.1505 3.0909,23.9065 C12.2689,22.6345 21.6829,23.2905 30.9899,22.9495 C35.4999,22.7835 39.9069,23.6875 44.4369,23.5225 C47.1439,23.4245 49.6289,22.5245 52.3009,22.4405 C53.5629,22.4015 55.1599,22.7045 56.3789,22.4785 C58.4509,22.0935 58.1859,21.2445 58.1669,19.7445 C58.1399,17.7125 58.7149,15.9275 58.8579,13.9335 C58.9909,12.0835 59.6999,9.8585 59.3459,8.0785 C59.0519,6.5995 59.0299,5.0545 58.6739,3.6115 C58.3629,2.3545 57.5649,1.3095 57.4149,0.0005 C55.7539,0.2775 54.0449,0.8095 52.3439,1.1385 C47.9379,1.9895 43.0269,1.5825 38.5059,1.9245 C34.7239,2.2115 30.8549,2.0605 27.0559,2.0295 C24.6049,2.0095 22.0819,2.9245 19.6549,2.5885 C17.5699,2.2985 15.9989,1.5545 13.7389,1.5055 C11.7269,1.4635 9.7019,1.5175 7.6879,1.5175 C6.7799,1.5185 4.5039,1.1685 3.7579,1.5975 C3.0799,1.9875 2.5949,3.8365 2.3679,4.5565 C2.1919,4.5905 2.1039,4.6075 1.9279,4.6415"></path>
							</g>
						</g>
					</g>
			</svg>
		</div>
	</HoverShape>

const HoverShape = styled.div`
	width: 40%;
	height: 100%;
	position: relative;
	.span-wrapper {
		${flexCenteredAll};
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 4;
	}
	span {
		text-align: center;
		font-family: ${fonts.akzidenz};
		display: block;
		color: white;
		font-size: 1.125rem;
		text-transform: uppercase;
	}
	.shape-wrapper {
		width: 100%;
		height: 100%;
		position: absolute;
		z-index: 1;
		top: 0;
		left: 0;
		svg {
			${absoluteCentered};
			object-fit: contain;
			width: 100%;
			height: 100%;
		}
	}
`
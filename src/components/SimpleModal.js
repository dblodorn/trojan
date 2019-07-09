import React, { useState } from 'react'
import { Transition } from 'react-spring'
import styled from 'styled-components'
import FullWindow from './FullWindow'
import Modal from './Modal'
import Close from './utils/Close'
import { buttonInit, sansFont, flexCenteredAll } from './../styles/mixins'
import { colors } from './../styles/theme'

export default props => {
	const [open, openModal] = useState(props.startOpen || false)
	return (
		<React.Fragment>
			{props.cta &&
				<ModalButton onClick={() => openModal(true)}>
					<span>{props.cta}</span>
				</ModalButton>
			}
			<Transition from={{ opacity: 0 }} enter={{ opacity: 1 }} leave={{ opacity: 0, pointerEvents: 'none' }}>
				{open &&  (styles =>
					<Modal>
						<ModalWrapper style={styles}>
							<ModalInner width={props.width || '100%'} height={props.height || '100%'}>
								<Close position={props.position || null} clickFunction={() => openModal(false)} color={props.closeColor || colors.black}/>
								{props.children}
							</ModalInner>
						</ModalWrapper>
					</Modal>
				)}
			</Transition>
		</React.Fragment>
  )
}

const ModalWrapper = styled.div`
  ${flexCenteredAll};
  position: fixed;
  z-index: 10000;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,.75);
`

const ModalButton = styled.button`
	${buttonInit};
	${sansFont};
	padding: 0;
	font-size: 1.2rem;
	color: white;
	position: relative;
	flex-grow: 0;
	margin: 0 .75rem;
	cursor: pointer;
`

const ModalInner = styled.div`
	width: 100%;
	height: ${props => props.height};
	max-width: ${props => props.width};
	position: relative;
	z-index: 100;
	${flexCenteredAll};
`
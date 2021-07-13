import React from 'react'
import styled from 'styled-components'

// utils
import { Container, colors } from '../GlobalStyles'
import FooterContent from './FooterContent'

const Footer = () => {
	return (
		<StyledFooter>
			<div className='line'></div>

			<FooterContent />

			<StyledFooterCopyright>
				<span>© 2021 tvcafé. Create by Jamoliddin Saidov</span>
				<div>
					<p>Terms of Use</p>
					<p>Privacy Policy</p>
				</div>
			</StyledFooterCopyright>
		</StyledFooter>
	)
}

const StyledFooter = styled.div`
	width: 100%;
	background: ${colors.bgNavColor};

	p {
		cursor: pointer;
		transition: color 300ms ease;
		font-weight: 300;

		&:hover {
			color: ${colors.primaryColorThree};
		}
	}
`

const StyledFooterCopyright = styled(Container)`
	border-top: 1px solid ${colors.bgBodyColor};
	padding: 1em 0;
	display: flex;
	align-items: baseline;
	justify-content: space-between;

	div {
		display: flex;
		align-items: baseline;
		justify-content: space-between;
		p {
			margin-left: 1em;
		}
	}
`

export default Footer

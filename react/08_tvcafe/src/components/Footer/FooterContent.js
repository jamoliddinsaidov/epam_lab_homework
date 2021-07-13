import React from 'react'
import styled from 'styled-components'

// utils
import { Container } from '../GlobalStyles'
import FooterLinks from './FooterLinks'

const FooterContent = () => {
	const content = [
		{
			heading: 'Browse',
			links: ['Live TV', 'Live News', 'Streaming'],
		},
		{
			heading: 'Resources',
			links: ['About Us', 'Pricing Plan', 'Help'],
		},
		{
			heading: 'Legal',
			links: ['Terms of Use', 'Privacy Policy', 'Security'],
		},
		{
			heading: 'Contact',
			links: ['+1 800 234-5678', 'support@tvcafe.com'],
		},
	]

	return (
		<StyledFooterContainer>
			{content.map((obj) => (
				<StyledFooterColumn key={obj.heading}>
					<h4>{obj.heading}</h4>
					<FooterLinks obj={obj} />
				</StyledFooterColumn>
			))}
		</StyledFooterContainer>
	)
}

const StyledFooterContainer = styled(Container)`
	display: flex;
	align-items: baseline;
	justify-content: space-between;
	padding: 3em 0;
`

const StyledFooterColumn = styled.div`
	h4,
	p {
		margin-bottom: 1em;
	}
`

export default FooterContent

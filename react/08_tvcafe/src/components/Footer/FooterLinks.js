import React from 'react'

const FooterLinks = ({ obj }) => {
	return (
		<>
			{obj.links.map((link) => (
				<p key={link}>{link}</p>
			))}
		</>
	)
}

export default FooterLinks

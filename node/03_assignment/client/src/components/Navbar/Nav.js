import React, { useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'

const Nav = () => {
	const pathname = useLocation().pathname
	const [location, setLocation] = useState(pathname)

	useEffect(() => {
		setLocation(pathname)
	}, [pathname])

	return (
		<div className='bg-dark py-3 mb-4'>
			<nav className='container navbar navbar-expand-md navbar-dark bg-dark d-flex justify-content-between'>
				<h4 className='text-danger fw-bold'>Speedy Truck</h4>

				<ul className='navbar-nav mb-2 mb-lg-0'>
					<li className='nav-item fs-5'>
						<Link
							className={`nav-link ${location === '/' || location.includes('/profile') ? 'active' : ''}`}
							aria-current='page'
							to='/'>
							Profile
						</Link>
					</li>
					<li className='nav-item fs-5'>
						<Link className={`nav-link ${location.includes('/trucks') ? 'active' : ''}`} to='/trucks'>
							Trucks
						</Link>
					</li>
					<li className='nav-item fs-5'>
						<Link className={`nav-link ${location.includes('/loads') ? 'active' : ''}`} to='/loads'>
							Loads
						</Link>
					</li>
					<li className='nav-item fs-5'>
						<Link className='nav-link' to='#'>
							Log Out
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	)
}

export default Nav

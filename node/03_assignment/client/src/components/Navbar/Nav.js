import React, { useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'

const Nav = () => {
	const pathname = useLocation().pathname
	const [location, setLocation] = useState(pathname)

	useEffect(() => {
		setLocation(pathname)
	}, [pathname])

	return (
		<div className='container  py-4'>
			<nav className='navbar navbar-expand-md navbar-light d-flex justify-content-between'>
				<h4 className='text-primary'>
					<i className='bi bi-truck'></i> Speedy Truck
				</h4>

				<ul className='navbar-nav mb-2 mb-lg-0'>
					<li className='nav-item fs-5'>
						<Link className={`nav-link ${location === '/' ? 'active' : ''}`} aria-current='page' to='/'>
							Dashboard
						</Link>
					</li>
					<li className='nav-item fs-5'>
						<Link className={`nav-link ${location === '/trucks' ? 'active' : ''}`} to='/trucks'>
							Trucks
						</Link>
					</li>
					<li className='nav-item fs-5'>
						<Link className={`nav-link ${location === '/loads' ? 'active' : ''}`} to='/loads'>
							Loads
						</Link>
					</li>
					<li className='nav-item fs-5'>
						<Link className={`nav-link ${location === '/profile' ? 'active' : ''}`} to='/profile'>
							Profile
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

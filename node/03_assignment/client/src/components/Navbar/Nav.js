import React, { useState, useEffect } from 'react'
import { useHistory, useLocation, Link } from 'react-router-dom'
import { deleteToken } from '../../utils/localStorageConfig'

const Nav = () => {
	const pathname = useLocation().pathname
	const [location, setLocation] = useState(pathname)
	const history = useHistory()

	useEffect(() => {
		setLocation(pathname)
	}, [pathname])

	const handleLogOut = () => {
		deleteToken()
		history.push('/signin')
	}

	return (
		<div className='bg-dark py-3 mb-4'>
			<nav className='container navbar navbar-expand-md navbar-dark bg-dark d-flex justify-content-between'>
				<h4 className='text-light fw-bold'>Speedy Truck</h4>

				<ul className='navbar-nav mb-2 mb-lg-0'>
					<li className='nav-item fs-5'>
						<Link
							className={`nav-link ${location === '/' || location.includes('/profile') ? 'active' : ''}`}
							aria-current='page'
							to='/'>
							Profile
						</Link>
					</li>
					<li className='nav-item fs-5 dropdown'>
						<Link
							className={`nav-link  dropdown-toggle ${location.includes('/trucks') ? 'active' : ''}`}
							to='#'
							id='dropdownMenuTrucks'
							data-bs-toggle='dropdown'
							aria-expanded='false'>
							Trucks
						</Link>

						<ul className='dropdown-menu dropdown-menu-dark' aria-labelledby='dropdownMenuTrucks'>
							<li>
								<Link className='dropdown-item' to='/trucks/create'>
									Create truck
								</Link>
							</li>
							<li>
								<Link className='dropdown-item' to='/trucks/list'>
									Truck list
								</Link>
							</li>
						</ul>
					</li>

					<li className='nav-item fs-5 dropdown'>
						<Link
							className={`nav-link dropdown-toggle ${location.includes('/loads') ? 'active' : ''}`}
							to='#'
							id='dropdownMenuLoads'
							data-bs-toggle='dropdown'
							aria-expanded='false'>
							Loads
						</Link>

						<ul className='dropdown-menu dropdown-menu-dark' aria-labelledby='dropdownMenuLoads'>
							<li>
								<Link className='dropdown-item' to='/loads/create'>
									Create load
								</Link>
							</li>
							<li>
								<Link className='dropdown-item' to='/loads/list'>
									Load list
								</Link>
							</li>
						</ul>
					</li>
					<li className='nav-item fs-5'>
						<Link className='nav-link' to='#' onClick={handleLogOut}>
							Log Out
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	)
}

export default Nav

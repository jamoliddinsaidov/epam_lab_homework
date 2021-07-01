import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
	return (
		<nav>
			<ul>
				<li>
					<NavLink to='/' exact>
						Home
					</NavLink>
				</li>
				<li>
					<NavLink to='/create'>Create</NavLink>
				</li>
				<li>
					<NavLink to='/todolist'>TodoList</NavLink>
				</li>
			</ul>
		</nav>
	)
}

export default Nav

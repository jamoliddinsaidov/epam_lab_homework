import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
	return (
		<div>
			<h1>Welcome!</h1>
			<p>This app helps you to create, delete and edit todos.</p>
			<Link to='/create'>Create yours</Link>
		</div>
	)
}

export default Home

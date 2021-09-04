import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import { UserProvider } from './contexts/UserContext'

ReactDOM.render(
	<React.StrictMode>
		<AuthProvider>
			<UserProvider>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</UserProvider>
		</AuthProvider>
	</React.StrictMode>,
	document.getElementById('root')
)

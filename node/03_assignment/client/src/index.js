import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import { UserProvider } from './contexts/UserContext'
import { TruckProvider } from './contexts/TruckContext'
import { LoadProvider } from './contexts/LoadContext'

ReactDOM.render(
	<React.StrictMode>
		<AuthProvider>
			<UserProvider>
				<TruckProvider>
					<LoadProvider>
						<BrowserRouter>
							<App />
						</BrowserRouter>
					</LoadProvider>
				</TruckProvider>
			</UserProvider>
		</AuthProvider>
	</React.StrictMode>,
	document.getElementById('root')
)

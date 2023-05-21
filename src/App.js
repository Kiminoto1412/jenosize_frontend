import './App.css';
import firebase from 'firebase/app';
import 'firebase/auth';
import { useEffect, useState } from 'react';
import LoginPage from './components/Login';

function App() {
	const [auth, setAuth] = useState(
		false || window.localStorage.getItem('auth') === 'true'
	);
	const [token, setToken] = useState('');

	useEffect(() => {
		firebase.auth().onAuthStateChanged((userCred) => {
			if (userCred) {
				// setAuth(true);
				// window.localStorage.setItem('auth', 'true');
				userCred.getIdToken().then((token) => {
					setToken(token);
					
				});
			}
		});
	}, []);

	const loginWithGoogle = () => {
		firebase
			.auth()
			.signInWithPopup(new firebase.auth.GoogleAuthProvider())
			.then((userCred) => {
				
				if (userCred) {
					setAuth(true);
					window.localStorage.setItem('auth', 'true');
				}
			});
	};

	return (
		<div className="App">
			{auth ? (
				<LoginPage token={token} />
			) : (
				<button onClick={loginWithGoogle}>Login with Google</button>
			)}
		</div>
	);
}

export default App;

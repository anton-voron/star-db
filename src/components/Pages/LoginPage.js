import React from 'react';

const LoginPage = ({isLoggedIn, onLogin}) => {
	return (
		<div calssName="jumbotron text-center">
			<p>Login to get access</p>
			<button className="btn btn-primary"
			onClick={() => onLogin()}>
			Login
			</button>
		</div>
	);
};

export default LoginPage;
import React from 'react';

const SecretPage = ({isLoggedIn}) => {

	if(isLoggedIn) {
		return (
			<div calssName="jumbotron text-center">
				<h3>This page is full of secrets!!!!</h3>
			</div>
		);
	}

	return <p>You should LogIn at first!!!</p>
}

export default SecretPage;
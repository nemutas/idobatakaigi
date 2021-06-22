import React, { useState } from 'react';
import { SignIn } from './SignIn';

export const App: React.FC = () => {
	const [name, setName] = useState('');
	console.log(name);

	const setUserName = (username: string) => {
		setName(username);
	};

	return <SignIn setName={setUserName} />;
};

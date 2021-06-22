import React, { useState } from 'react';
import { ChatArea } from './ChatArea';
import { SignIn } from './SignIn';

export const App: React.FC = () => {
	const [name, setName] = useState('');

	const setUserName = (username: string) => {
		setName(username);
	};

	return <>{name ? <ChatArea /> : <SignIn setName={setUserName} />}</>;
};

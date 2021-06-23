import React, { useEffect, useState } from 'react';
import { ChatArea } from './ChatArea';
import { SignIn } from './SignIn';

export const App: React.FC = () => {
	const [name, setName] = useState('');

	// チャットエリア開発時のみの設定
	useEffect(() => {
		setName('DevName');
	}, []);

	const setUserName = (username: string) => {
		setName(username);
	};

	return <>{name ? <ChatArea username={name} /> : <SignIn setName={setUserName} />}</>;
};

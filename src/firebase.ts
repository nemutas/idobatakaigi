/* eslint-disable react-hooks/exhaustive-deps */
import 'firebase/database';
import firebase from 'firebase/app';
import { useEffect, useState } from 'react';

const {
	REACT_APP_FIREBASE_API_KEY,
	REACT_APP_FIREBASE_AUTH_DOMAIN,
	REACT_APP_FIREBASE_DATABASE_URL,
	REACT_APP_FIREBASE_PROJECT_ID,
	REACT_APP_FIREBASE_STORAGE_BUCKET,
	REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
	REACT_APP_FIREBASE_APP_ID
} = process.env;

const firebaseConfig = {
	apiKey: REACT_APP_FIREBASE_API_KEY,
	authDomain: REACT_APP_FIREBASE_AUTH_DOMAIN,
	databaseURL: REACT_APP_FIREBASE_DATABASE_URL,
	projectId: REACT_APP_FIREBASE_PROJECT_ID,
	storageBucket: REACT_APP_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
	appId: REACT_APP_FIREBASE_APP_ID
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// ======================================================
// realtime database

const realtimeDB = firebaseApp.database();
const messagesRef = realtimeDB.ref('messages');

export const pushMessage = (name: string, text: string) => {
	messagesRef.push({ name, text });
};

type GetMessageType = {
	key: string;
	name: string;
	text: string;
};

export const useFetchData = () => {
	const [messages, setMessages] = useState<GetMessageType[]>([]);
	useEffect(() => {
		messagesRef
			.orderByKey()
			.limitToLast(15)
			.on(
				'value',
				snapshot => {
					const messages = snapshot.val();
					if (messages) {
						const entries = Object.entries(messages);
						const convertMessages = entries.map(entry => {
							const [key, nameAndText] = entry;
							return { key, ...(nameAndText as Object) } as GetMessageType;
						});
						setMessages(convertMessages);
					}
				},
				errorObject => {
					console.log('The read failed: ' + errorObject.name);
				}
			);
	}, [messagesRef]);
	return { messages };
};

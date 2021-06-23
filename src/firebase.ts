import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyDb8IH6dewMp9SaUGaxifsUzWV3KT28VJ4',
	authDomain: 'nemutas-idobatakaigi.firebaseapp.com',
	databaseURL: 'https://nemutas-idobatakaigi-default-rtdb.asia-southeast1.firebasedatabase.app',
	projectId: 'nemutas-idobatakaigi',
	storageBucket: 'nemutas-idobatakaigi.appspot.com',
	messagingSenderId: '853703029424',
	appId: '1:853703029424:web:b5d52fa8b5c74cd62e4175'
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const messageRef = database.ref('messages');

export const pushMessage = (name: string, text: string) => {
	messageRef.push({ name, text });
};

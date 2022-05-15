import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
const firebaseConfig = {
	apiKey: 'AIzaSyCVmufL6CoTo8B4q2J850moSpYAaV9dM0g',
	authDomain: 'e-warungku.firebaseapp.com',
	projectId: 'e-warungku',
	storageBucket: 'e-warungku.appspot.com',
	messagingSenderId: '521155400094',
	appId: '1:521155400094:web:c149cc0c9397dcbb4a068f',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage()
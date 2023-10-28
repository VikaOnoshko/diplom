// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDK6GRe3v6nqG6xrumGDRn3GzdL4iQFth0',
  authDomain: 'diplom-889be.firebaseapp.com',
  projectId: 'diplom-889be',
  storageBucket: 'diplom-889be.appspot.com',
  messagingSenderId: '505536531834',
  appId: '1:505536531834:web:3d293d6303e82cd2cf1ac3',
  measurementId: 'G-P2KK0LSV71',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

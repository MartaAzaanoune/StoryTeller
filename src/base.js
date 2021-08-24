import firebase from 'firebase';
import 'firebase/storage';

export const app = firebase.initializeApp({
    "projectId": "fairytales-audio",
    "appId": "1:600328333320:web:0f348a7f04090a210489bd",
    "storageBucket": "fairytales-audio.appspot.com",
    "locationId": "europe-west",
    "apiKey": "AIzaSyAefBrnfNknrmp_XQpvAh-OA9WunzfOKFE",
    "authDomain": "fairytales-audio.firebaseapp.com",
    "messagingSenderId": "600328333320"
});

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDHvBGRYqRRGB8u6C_V0dCbUclwukPIgmk",
    authDomain: "cyber-doctor.firebaseapp.com",
    projectId: "cyber-doctor",
    storageBucket: "cyber-doctor.appspot.com",
    messagingSenderId: "475786774132",
    appId: "1:475786774132:web:df107bd19111699f47b321"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;
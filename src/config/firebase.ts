import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAhAXHzE41RjIm71qT7sFESscTqa7BxnVc",
    authDomain: "visualizehomeai.firebaseapp.com",
    projectId: "visualizehomeai",
    storageBucket: "visualizehomeai.firebasestorage.app",
    messagingSenderId: "121010965602",
    appId: "1:121010965602:web:47379df01e6fa3a9b4d53b",
    measurementId: "G-GXPDQJ04QV"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app); 
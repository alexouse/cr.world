import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.1.2/firebase-app.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.1.2/firebase-firestore.js';

// Конфигурация Firebase
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Инициализация Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

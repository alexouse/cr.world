// Взаимодействие с ИИ через API
function askQuestionToAI(question) {
    fetch('https://api.openai.com/v1/completions', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer proj_vifjJ4AnCCchx4JjRjcVxw6h`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            model: "text-davinci-003", 
            prompt: question, 
            max_tokens: 100
        })
    })
    .then(response => response.json())
    .then(data => {
        const aiResponse = data.choices[0].text.trim();
        document.getElementById('question-box').innerHTML = `<p>ИИ: ${aiResponse}</p>`;
    })
    .catch(error => {
        console.error('Ошибка:', error);
    });
}

// Инициализация Firebase
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.1.2/firebase-app.js';
import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.1.2/firebase-firestore.js';

// Вставьте ваш конфигурационный объект Firebase
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

// Обработка формы и отправка данных в Firebase Firestore
document.getElementById('world-form').addEventListener('submit', async function (e) {
    e.preventDefault();
    
    const worldName = document.getElementById('world-name').value;
    const worldDescription = document.getElementById('world-description').value;

    // Сохранение данных мира в Firestore
    try {
        await addDoc(collection(db, "worlds"), {
            name: worldName,
            description: worldDescription,
            createdAt: new Date()
        });
        alert("Мир успешно создан!");
    } catch (e) {
        console.error("Ошибка при добавлении документа: ", e);
    }
});

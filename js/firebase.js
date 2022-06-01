/********************************************** 
* Renomeie este arquivo para firebase.js!
***********************************************/

// Cole as informações do seu RealTime Database do Firebase abaixo:
const firebaseConfig = {
  apiKey: "AIzaSyBruXpUWGbhhYKo2PCVPrv1Wxt9pkPu1hg",
  authDomain: "projetopadoka-69533.firebaseapp.com",
  databaseURL: "https://projetopadoka-69533-default-rtdb.firebaseio.com",
  projectId: "projetopadoka-69533",
  storageBucket: "projetopadoka-69533.appspot.com",
  messagingSenderId: "524808022062",
  appId: "1:524808022062:web:f5a7a6c5e4b1e6ed03d7bf",
  measurementId: "G-SSJ660EG5R"
};


/*
* Nas regras do Realtime Database, informe:
* {
  "rules": {
    ".read": "auth != null",
    ".write": "auth != null"
  }
}
*/

// Inicializando o Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.database();

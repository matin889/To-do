import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  // Din config
  apiKey: "AIzaSyAKlXLgqYGz4XC19xN4YtISUrlYHUmBzxI",
  authDomain: "todo-list-react-project-cb2f0.firebaseapp.com",
  projectId: "todo-list-react-project-cb2f0",
  storageBucket: "todo-list-react-project-cb2f0.appspot.com",
  messagingSenderId: "724050514301",
  appId: "1:724050514301:web:12c05362902683405bbc14",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;

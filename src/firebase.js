import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAz8J82S3t24zfRAEZmm6B4DV-oBFVLWAI",
    authDomain: "clone-linkedin-7a29d.firebaseapp.com",
    projectId: "clone-linkedin-7a29d",
    storageBucket: "clone-linkedin-7a29d.appspot.com",
    messagingSenderId: "47921068933",
    appId: "1:47921068933:web:8141981478235e389b22ec",
    measurementId: "G-99B1ZG06C4"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
    const db = firebaseApp.firestore();
    const auth = firebase.auth();
    const provider = new firebase.auth.GoogleAuthProvider();
    const storage = firebase.storage();

    export { auth, provider, storage };
    export default db;
    
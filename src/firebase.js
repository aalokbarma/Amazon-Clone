import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyDA_s2Vq5pVOgMz20wd0jUVV4zxuPDteQc",
  authDomain: "clo-d9af9.firebaseapp.com",
  projectId: "clo-d9af9",
  storageBucket: "clo-d9af9.appspot.com",
  messagingSenderId: "179504849154",
  appId: "1:179504849154:web:5b7e2f44e7e617d21aa21b",
  measurementId: "G-JLHFGME1H2"
};

//App ID : 1:179504849154:web:5b7e2f44e7e617d21aa21b



const firebaseApp = firebase.initializeApp(firebaseConfig);
  // firebase.analytics();

  const db = firebase.firestore();
  const auth = firebase.auth();

  export {db, auth};
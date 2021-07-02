import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyDdOs9Medh6YxiWQncoZmf0RfPtOeJ9K0o",
    authDomain: "netflix-clone-app-4323a.firebaseapp.com",
    projectId: "netflix-clone-app-4323a",
    storageBucket: "netflix-clone-app-4323a.appspot.com",
    messagingSenderId: "841786918824",
    appId: "1:841786918824:web:df7700315f77bef615bf9d",
    measurementId: "G-YGPKBKQW7R"
  };

  const firebaseApp =firebase.initializeApp(firebaseConfig);
  const db =firebaseApp.firestore();
  const auth=firebase.auth();

  export {auth};
  export default db;
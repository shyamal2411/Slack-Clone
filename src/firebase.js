import firebase from "firebase/compat/app"
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAyp8jLu7kgx3exj3Yq0Qw3KDrWtnH1VAo",
  authDomain: "slack-clone-cad81.firebaseapp.com",
  projectId: "slack-clone-cad81",
  storageBucket: "slack-clone-cad81.appspot.com",
  messagingSenderId: "301211958071",
  appId: "1:301211958071:web:bdc547916de8f22016f8b2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()

export {auth, provider, db};
// export default db;
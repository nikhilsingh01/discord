import firebase from "firebase";

// const firebaseConfig = {
//   apiKey: "AIzaSyCk3Jep7m0nWBF5-iAuCmXFgX9Lgx6LBPE",
//   authDomain: "discord-clone-768d4.firebaseapp.com",
//   projectId: "discord-clone-768d4",
//   storageBucket: "discord-clone-768d4.appspot.com",
//   messagingSenderId: "89139412998",
//   appId: "1:89139412998:web:243eb102fe14c096a1c387",
// };

const firebaseConfig = {
  apiKey: "AIzaSyAxsvYs41hK85_UWy1x2JLG03G0jLzovvw",
  authDomain: "fir-2-yt.firebaseapp.com",
  projectId: "fir-2-yt",
  storageBucket: "fir-2-yt.appspot.com",
  messagingSenderId: "118737844665",
  appId: "1:118737844665:web:cc3aeae8afdd80631b9e68",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };

import { getAuth } from 'firebase/auth';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCYu9zgEfNxQVc1ZhBFvjC8qCDlMGamx3E",
  authDomain: "ecovidaverde-20e7e.firebaseapp.com",
  projectId: "ecovidaverde-20e7e",
  storageBucket: "ecovidaverde-20e7e.appspot.com",
  messagingSenderId: "364932881695",
  appId: "1:364932881695:web:920d22aae82f85c148e42a"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
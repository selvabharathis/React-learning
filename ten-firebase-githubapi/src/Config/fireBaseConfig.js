import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCpWRGbmqT3QlX96r33WkmAbGfp3QELfJs",
    authDomain: "githubapi-4a075.firebaseapp.com",
    projectId: "githubapi-4a075",
    storageBucket: "githubapi-4a075.appspot.com",
    messagingSenderId: "502080066569",
    appId: "1:502080066569:web:25b36eecaa81ee7b6694d8",
    measurementId: "G-HY3BYYDBBT"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
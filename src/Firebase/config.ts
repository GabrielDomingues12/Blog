import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB9cIuhyoxz4yKZwwAQgU-HV4jcRI2nbWc",
  authDomain: "devdispatch-1d125.firebaseapp.com",
  projectId: "devdispatch-1d125",
  storageBucket: "devdispatch-1d125.appspot.com",
  messagingSenderId: "758812720512",
  appId: "1:758812720512:web:75b38977df0121c3d95565",
  measurementId: "G-7GZWWJHD1N"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db}
export {app}
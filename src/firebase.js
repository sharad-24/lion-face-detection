import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyCngXg3w-UO_AAoubyO6eyM6dXhpxAXL1s",
    authDomain: "lionface-b2ecc.firebaseapp.com",
    projectId: "lionface-b2ecc",
    storageBucket: "lionface-b2ecc.appspot.com",
    messagingSenderId: "935677069864",
    appId: "1:935677069864:web:ae42269cdd7b705f05831d",
    measurementId: "G-1EXN3MMTT1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
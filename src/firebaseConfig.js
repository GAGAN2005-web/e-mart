// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth, setPersistence, browserSessionPersistence } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBa9KrqpkxoLFMZcUMDNIzGQWe_pdV91xc",
  authDomain: "e-mart-auth.firebaseapp.com",
  projectId: "e-mart-auth",
  storageBucket: "e-mart-auth.firebasestorage.app",
  messagingSenderId: "7629132454",
  appId: "1:7629132454:web:392dcb4f9fd90ec8775a67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Set session-based persistence so user must sign in again after closing tab/browser
setPersistence(auth, browserSessionPersistence)
  .then(() => {
    console.log("Session persistence enabled — user must sign in each time.");
  })
  .catch((error) => {
    console.error("Error setting persistence:", error);
  });


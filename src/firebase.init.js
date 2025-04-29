import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCQzEa5SlvE6VyoHMRGJhMLe0LTAGRshK4",
  authDomain: "auth-integration-54e5c.firebaseapp.com",
  projectId: "auth-integration-54e5c",
  storageBucket: "auth-integration-54e5c.firebasestorage.app",
  messagingSenderId: "693969957953",
  appId: "1:693969957953:web:b9a1a30bda73cc691242c0",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

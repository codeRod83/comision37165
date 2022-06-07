import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBhfuq3Rc3l-V1o1vfjU-OE5J5UY_nqS1g",
  authDomain: "ecommerce-37165.firebaseapp.com",
  projectId: "ecommerce-37165",
  storageBucket: "ecommerce-37165.appspot.com",
  messagingSenderId: "241442649895",
  appId: "1:241442649895:web:dea497728e4c3a2b2c5b02"
};

const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () => {
    return app
}
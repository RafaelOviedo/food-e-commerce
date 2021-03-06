import { createApp } from 'vue'
import App from './App.vue'
import store from "./store"
import router from "./router"

//import firebase package
import * as firebase from "firebase/app";

// define and initialize your firebase app config
const firebaseConfig = {
  apiKey: "AIzaSyD264w5aW2mYuaje_8jn7sJ0LoXb9rwFm0",
  authDomain: "food-e-commerce-810f8.firebaseapp.com",
  projectId: "food-e-commerce-810f8",
  storageBucket: "food-e-commerce-810f8.appspot.com",
  messagingSenderId: "779643384521",
  appId: "1:779643384521:web:75a638ca80a522e2291318"
};

// Export firebaseApp
firebase.initializeApp(firebaseConfig);
  
createApp(App)
    .use(router)
    .use(store)
    .mount('#app');
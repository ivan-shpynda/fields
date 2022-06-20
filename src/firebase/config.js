import { initializeApp } from "firebase/app";

import { getFirestore } from "@firebase/firestore";
import { getStorage } from "@firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBxgWhzbvbPTdpjx_0dsy4rwpGG6jef-y0",
  authDomain: "photo-galery-f9c9e.firebaseapp.com",
  projectId: "photo-galery-f9c9e",
  storageBucket: "photo-galery-f9c9e.appspot.com",
  messagingSenderId: "1096090652019",
  appId: "1:1096090652019:web:82017c8e19380caf46c906"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const db = getFirestore(app);

import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore} from 'firebase/firestore';
import { getDatabase} from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyBEHQJgKNAg1ypGMAIRycFbhXW0bgFL6RE",
  authDomain: "stckwioot.firebaseapp.com",
  projectId: "stckwioot",
  storageBucket: "stckwioot.firebasestorage.app",
  messagingSenderId: "40306861237",
  appId: "1:40306861237:web:0f70f0d2ebcb7eb7bc8afc",
  measurementId: "G-X8MYV7T59P"
};


const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const database = getDatabase(app);


export { app, auth, db ,database};

export interface NotificationDocument {
  id: string;
  name: string;
  hasPersonalInfo: boolean;
  hasCardInfo: boolean;
  currentPage: string;
  time: string;
  notificationCount: number;
  personalInfo?: {
    fullName: string;
    email: string;
    phone: string;
    address: string;
  };
  cardInfo?: {
    cardNumber: string;
    expirationDate: string;
    cvv: string;
  };
}


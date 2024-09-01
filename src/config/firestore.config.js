import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

import { firebaseCredential } from './env.mapping';

const {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
  measurementId,
} = firebaseCredential;

const firebaseConfig = {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
  measurementId,
};
const fireStoreConnection = getFirestore(initializeApp(firebaseConfig));

export default fireStoreConnection;

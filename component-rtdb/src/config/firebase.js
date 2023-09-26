import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';

//rtdb-testing
const firebaseConfig = {

  };

  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);

  export {app, db}
import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore/lite';
import {getStorage} from "firebase/storage";
import {getAuth} from "firebase/auth";

const firebase_1 = {
    // your config from firebase 1
};

const firebase_2 = {
    // your config from firebase 2
};

// config to default firebase 1
const app_1 = initializeApp(firebase_1);
export const db = getFirestore(app_1);
export const auth = getAuth(app_1)
export const storage = getStorage(app_1)

// config to firebase 2
const app_2 = initializeApp(firebase_2, "secondary");
export const db_2a = getFirestore(app_2);
export const auth_2a = getAuth(app_2)
export const storage_2a = getStorage(app_2)

const Fire = app_1
export default Fire
if (typeof window !== "undefined") window.Fire = Fire


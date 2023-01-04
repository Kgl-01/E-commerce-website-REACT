import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const config = {
  apiKey: "AIzaSyDEV98dZqnWMVJT7eykV6GYGL4aCps2Yko",
  authDomain: "ecommerceshopping-db.firebaseapp.com",
  projectId: "ecommerceshopping-db",
  storageBucket: "ecommerceshopping-db.appspot.com",
  messagingSenderId: "282861980576",
  appId: "1:282861980576:web:2fe4919ced4340d3f1b2c5",
  measurementId: "G-JD9B53PJQ7",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log(`error creating user`, err.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

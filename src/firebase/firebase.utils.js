import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyACZdkIwzI6nTgK2m5ZdUS2La2bTXYVV3w",
  authDomain: "meowear-db.firebaseapp.com",
  projectId: "meowear-db",
  storageBucket: "meowear-db.appspot.com",
  messagingSenderId: "1054457996667",
  appId: "1:1054457996667:web:279f210f0b276048d689de",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// User and auth utilities
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email, photoURL } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        photoURL,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ promp: "select_account" });

// export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

// Fill fireabase with data.js
export const addCollectionsAndDocuments = async (
  collectionKey,
  documentsToAdd
) => {
  const collectionReference = firestore.collection(collectionKey);

  const batch = firestore.batch();
  documentsToAdd.forEach((document) => {
    const newDocumentReference = collectionReference.doc();
    batch.set(newDocumentReference, document);
  });

  return await batch.commit();
};

// Data model converter between Categories in firebase and categories in app
export const convertCategoriesSnapshotToMap = (categoriesSnapshot) => {
  const transformedCategories = categoriesSnapshot.docs.map((document) => {
    const { title } = document.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: document.id,
      ...document.data(),
    };
  });

  const storeData = transformedCategories.reduce((accumulator, category) => {
    accumulator[category.title.toLowerCase()] = category;
    return accumulator;
  }, {});

  return storeData;
};

export default firebase;

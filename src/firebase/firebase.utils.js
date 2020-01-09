import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAKaPTnzcfSJKAwfwPK3VhDiRk1F3sfvaU",
    authDomain: "clothing-5c598.firebaseapp.com",
    databaseURL: "https://clothing-5c598.firebaseio.com",
    projectId: "clothing-5c598",
    storageBucket: "clothing-5c598.appspot.com",
    messagingSenderId: "962290028836",
    appId: "1:962290028836:web:37b406cc399dda328d23b1",
    measurementId: "G-ER10XWRHTQ"
  };

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  // const colRef = firestore.collection('users');
  // const colSnapshot = await colRef.get();
  // console.log({collection: colSnapshot.docs.map(doc => doc.data())});

  if (!snapShot.exists) {
    const {displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set(
        {
          displayName,
          email,
          createdAt,
          ...additionalData
        });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  } 
  return userRef;
};

export const createCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionsRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionsRef.doc(obj.title);
    console.log(newDocRef);
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  })
  // console.log(transformedCollection);
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {})
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  })
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ 'prompt': 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;

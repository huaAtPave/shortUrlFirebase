const { initializeApp } = require('firebase/app');
const { getFirestore } = require('firebase/firestore/lite');

const firebaseConfig = {
    apiKey: "AIzaSyCM-A8XfxMArRZGFrNayo3VgsHCfs7WtlI",
    authDomain: "pave-short-url-hua-wu.firebaseapp.com",
    projectId: "pave-short-url-hua-wu",
    storageBucket: "pave-short-url-hua-wu.appspot.com",
    messagingSenderId: "953433010231",
    appId: "1:953433010231:web:4441687bf633024fd34fb2"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

module.exports = db;

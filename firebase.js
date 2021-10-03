import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyBUL1H03W6HjeuOqQzLhr7DiRVOvAs8y6g",
    authDomain: "uber-eats-clone-c88c7.firebaseapp.com",
    projectId: "uber-eats-clone-c88c7",
    storageBucket: "uber-eats-clone-c88c7.appspot.com",
    messagingSenderId: "311403741423",
    appId: "1:311403741423:web:afb2aad9548a3323175b1a"
};

!firebase.apps.length? firebase.initializeApp(firebaseConfig):firebase.app();

export default firebase;
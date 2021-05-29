import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    // apiKey: "AIzaSyCucE33mJSLmzXWXxV_7rkOaJW4IpT8lM0",
    // authDomain: "redwire-3f900.firebaseapp.com",
    // databaseURL: "https://redwire-3f900.firebaseio.com",
    // projectId: "redwire-3f900",
    // storageBucket: "redwire-3f900.appspot.com",
    // messagingSenderId: "713986912235",
    // appId: "1:713986912235:web:db8dc75f090b6c01a133ae",
    // measurementId: "G-G1X4RD6N0X"
    apiKey: "AIzaSyBcSvMuGRPod_P_wTc00wAuEbPRgNlTMCI",
    authDomain: "redwire-446fb.firebaseapp.com",
    databaseURL: "https://redwire-446fb.firebaseio.com",
    projectId: "redwire-446fb",
    storageBucket: "redwire-446fb.appspot.com",
    messagingSenderId: "453001559100",
    appId: "1:453001559100:web:5500925a92cfe47ae9d739",
    measurementId: "G-Y0L3V4C8CG"
}

firebase.initializeApp(config);
firebase.analytics();
const DB = firebase.firestore();
const usersCollection = DB.collection('users');

export {
    firebase,
    usersCollection
}
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
var config = {
    apiKey: "AIzaSyCCdKAJs8IlT7gduCaTU2WuFZIYOhLvp-k",
    authDomain: "maps-3faa0.firebaseapp.com",
    databaseURL: "https://maps-3faa0.firebaseio.com",
    projectId: "maps-3faa0",
    storageBucket: "maps-3faa0.appspot.com",
    messagingSenderId: "654261766325"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true})
export default firebase;

import firebase from "firebase";

const config = {
  apiKey: "AIzaSyCpIRnmwIIJA9mQcSxm5l68zp8-qcGNElA",
  authDomain: "burguer-queen-874b6.firebaseapp.com",
  databaseURL: "https://burguer-queen-874b6.firebaseio.com",
  projectId: "burguer-queen-874b6",
  storageBucket: "burguer-queen-874b6.appspot.com",
  messagingSenderId: "432564279720",
  appId: "1:432564279720:web:ff0dd269f6140588"
};

firebase.initializeApp(config);

export default firebase;
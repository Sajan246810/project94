// Your web app's Firebase configuration
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbuksq3htsdp5nbQFsUn4o0WGX3Z8NgUQ",
  authDomain: "letschat-9e08d.firebaseapp.com",
  projectId: "letschat-9e08d",
  storageBucket: "letschat-9e08d.appspot.com",
  messagingSenderId: "434873468649",
  appId: "1:434873468649:web:3ef4e4efa17028874d9278"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    
    //End code
    });});}
getData();

function addroom(){
    roomname = document.getElementById("room_name").value ;
    firebase.database().ref("/").child(roomname).update(
        {purpose : "add room name"}
    )
}
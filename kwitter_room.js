
//ADD YOUR FIREBASE LINKS HERE
  var firebaseConfig = {
      apiKey: "AIzaSyBNU-Sm1OfyOPQQvyH5ZoZTMT_LkkXjz4Y",
      authDomain: "kwitter-4b01d.firebaseapp.com",
      databaseURL: "https://kwitter-4b01d-default-rtdb.firebaseio.com",
      projectId: "kwitter-4b01d",
      storageBucket: "kwitter-4b01d.appspot.com",
      messagingSenderId: "705473643890",
      appId: "1:705473643890:web:24cc605d91d4847ad1c9eb"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome " + user_name + "!";
    function addRoom()
    {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";

    }



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room_name - " + Room_names );     
      row ="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      

      //End code
      });});}
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";

}

function logout()
{
  localStorage.removeItem("room_name");
  localStorage.removeItem("user_name");
  window.location = "kwitter.html";
}
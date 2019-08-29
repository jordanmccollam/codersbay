// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAy7ANyB6WAgW6ez_Tdafx8Su8cfyALdXo",
  authDomain: "coders-bay-903ee.firebaseapp.com",
  databaseURL: "https://coders-bay-903ee.firebaseio.com",
  projectId: "coders-bay-903ee",
  storageBucket: "coders-bay-903ee.appspot.com",
  messagingSenderId: "734572277751",
  appId: "1:734572277751:web:d3497ef9c16c2259"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Assign the reference to the database to a variable named 'database'
// var database = ...
var database = firebase.database();


// Initial Values
var initialBid = 0;
var initialBidder = "No one :-(";
var highPrice = initialBid;
var highBidder = initialBidder;

// --------------------------------------------------------------

// At the initial load and subsequent value changes, get a snapshot of the stored data.
// This function allows you to update your page in real-time when the firebase database changes.
database.ref().on("value", function(snapshot) {

  // If Firebase has a highPrice and highBidder stored (first case)
  if (snapshot.child("name").exists() && snapshot.child("price").exists()) {

    // Set the variables for highBidder/highPrice equal to the stored values in firebase.
    // highPrice = ...
    // highBidder = ...
    highPrice = snapshot.val().price;
    highBidder = snapshot.val().name;


    // Change the HTML to reflect the stored values
    $("#highest-bidder").html(highBidder);
    $("#highest-price").html(highPrice);


    // Print the data to the console.
    console.log("Current high price: " + highPrice);
    console.log("Current high bidder: " + highBidder);

  }

  // Else Firebase doesn't have a highPrice/highBidder, so use the initial local values.
  else {

    // Change the HTML to reflect the initial values
    $("#highest-bidder").html(highBidder);
    $("#highest-price").html(highPrice);

    // Print the data to the console.
    console.log("Current high price: " + highPrice);
    console.log("Current high bidder: " + highBidder);

  }


// If any errors are experienced, log them to console.
}, function(errorObject) {
  console.log("The read failed: " + errorObject.code);
});

// --------------------------------------------------------------

// Whenever a user clicks the submit-bid button
$("#submit-bid").on("click", function(event) {
  // Prevent form from submitting
  event.preventDefault();

  // Get the input values
  var name = $("#bidder-name").val();
  var price = $("#bidder-price").val();

  // Log the Bidder and Price (Even if not the highest)
  if (price > highPrice) {

    // Alert
    alert("You are now the highest bidder.");

    // Save the new price in Firebase
    database.ref().set({
      name: name,
      price: price,
    });

    // Log the new High Price


    // Store the new high price and bidder name as a local variable
    

    // Change the HTML to reflect the new high price and bidder

  }

  else {
    // Alert
    alert("Sorry that bid is too low. Try again.");
  }

});

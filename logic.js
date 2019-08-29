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
  if (snapshot.child("highBidder").exists() && snapshot.child("highPrice").exists()) {

    // Set the variables for highBidder/highPrice equal to the stored values in firebase.
    // highPrice = ...
    // highBidder = ...
    


    // Change the HTML to reflect the stored values


    // Print the data to the console.


  }

  // Else Firebase doesn't have a highPrice/highBidder, so use the initial local values.
  else {

    // Change the HTML to reflect the initial values


    // Print the data to the console.


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


  // Log the Bidder and Price (Even if not the highest)
  if (bidderPrice > highPrice) {

    // Alert
    alert("You are now the highest bidder.");

    // Save the new price in Firebase


    // Log the new High Price


    // Store the new high price and bidder name as a local variable


    // Change the HTML to reflect the new high price and bidder

  }

  else {
    // Alert
    alert("Sorry that bid is too low. Try again.");
  }

});

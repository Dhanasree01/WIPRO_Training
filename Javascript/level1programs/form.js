// Sample user input (simulate form data)
var username = "dhana";
var age = 21;
var isSubscribed = true;

// Type validation
function validateUserData(username, age, isSubscribed) {
  if (typeof username !== "string") {
    console.log(" Username must be a string");
    return;
  }

  if (typeof age !== "number" || isNaN(age)) {
    console.log("Age must be a number");
    return;
  }

  if (typeof isSubscribed !== "boolean") {
    console.log("Subscription status must be boolean");
    return;
  }

  console.log("User data is valid");
  console.log("Username:", username);
  console.log("Age:", age);
  console.log("Subscribed:", isSubscribed);
}

// Call function
validateUserData(username, age, isSubscribed);

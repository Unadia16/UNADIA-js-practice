//UNADIA, AARUME XANDER BSCS-1B
let favActorFirstName = "Henry";//Create variable name (favActorFirstName) & store your fav Actor name.
let favActorLastName = "Cavill";//Create variable name (favActorLastName) & store the last name of (FA).
let fullName = favActorFirstName + " " + favActorLastName;//Create variable name (fullName) & concatenate (favActorFirstName, favActorLastName).
let uppercase = fullName.toUpperCase();//Create variable name (uppercase) & CAPITALIZE your fav actor name.
let message = `My favorite actor is ${uppercase}. He is an amazing in playing the role Superman.`;//Create a variable name (message) & store `My favorite Actor Is (favActorName) & ...should be in UPPERCASE.

message += " His best movie is Man of Steel.";//Now append this message to the (message variable) `his best show is Man of Steel`.

//Finally log all variables to the console using code runner in vscode.
console.log("First Name:", favActorFirstName);
console.log("Last Name:", favActorLastName);
console.log("Full Name:", fullName);
console.log("Uppercase Name:", uppercase);
console.log("Message:", message);
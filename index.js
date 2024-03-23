// Code your solutions in this file

function countDown(startingNumber) {
    // Ensure the input is a positive integer
    if (typeof startingNumber !== 'number' || startingNumber <= 0 || !Number.isInteger(startingNumber)) {
      console.log("Please provide a positive integer as input.");
      return;
    }
  
    // Loop while startingNumber is greater than or equal to 0
    while (startingNumber >= 0) {
      console.log(startingNumber);
      startingNumber--; // Decrement startingNumber in each iteration
    }
  }

  countDown(10);
  

function writeCards(names, eventName) {
    // Create an empty array to store the thank you messages
    let thankYouMessages = [];
  
    // Iterate through each name in the names array
    for (let i = 0; i < names.length; i++) {
      // Create the thank you message using string interpolation
      let message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
      
  
      thankYouMessages.push(message);
    }
  
   
    return thankYouMessages;
  }
  

  const names = ["Charlie", "Samip", "Ali"];
  const eventName = "birthday";
  const messages = writeCards(names, eventName);
  console.log(messages);
  

  
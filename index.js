// Import the required libraries
const axios = require("axios");
const readline = require("readline");
require("dotenv").config();

// Configure readline interface for getting user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Request the user's input
rl.question("Please enter your message: ", (message) => {
  // Define the API endpoint
  const apiEndpoint = "https://api.openai.com/v1/chat/completions";

  // Configure the request headers
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
  };

  // Configure the request body
  const data = {
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "user",
        content: message, // Use the user's input as the message content
      },
    ],
    temperature: 0.7,
  };

  // Make the POST request to the API
  axios
    .post(apiEndpoint, data, { headers })
    .then((response) => {
      // If the request was successful, log the content of the AI's response
      console.log(response.data.choices[0].message.content);
    })
    .catch((error) => {
      // If there was an error, log it
      console.error(error);
    })
    .finally(() => {
      // Close the readline interface
      rl.close();
    });
});

import io from "socket.io-client";
console.log('hello world');
let newElement = document.createElement('h1');
newElement.innerHTML = 'Hello, world!';
let titleElement = document.querySelector('.title');
titleElement.textContent = "hello world";
const socket = io('http://localhost:3001');

// Listen for the "sendHtmlPopup" event
socket.on('sendHtmlPopup', (string) => {
  console.log(string); // Log the received string
  // Perform any other operations with the string value here
}); 
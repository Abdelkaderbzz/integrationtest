console.log('success1');
console.log('hello world');
let newElement = document.createElement('h1');
newElement.innerHTML = 'Hello, world!';

document.body.appendChild(newElement);
console.log(document.querySelector('title').textContent = "yes i did it")

document.querySelector('title').appendChild(newElement);
console.log("hello")
// Get the element with the class "title"
var titleElement = document.querySelector('.title');

// Change the text content of the element
titleElement.textContent = "hello world";

const App = () =>
{
  console.log("hello world")
const scriptTag = document.querySelector('script[token]');
const token = scriptTag.getAttribute('token');
console.log(token);

  const popupElement = document.createElement('div');
  document.body.appendChild(popupElement);
  const setPopup = (string) => {
    popupElement.innerHTML = string;
  };
 
  const socket = io('https://popupbackend.onrender.com');
  socket.on('receiveMessage', (string) => {
    console.log('Message from the server', string);
    setPopup(string);
  });
};

App();
 

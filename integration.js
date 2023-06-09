
const App = () =>
{
  console.log("hello world")
  const popupElement = document.createElement('div');
  document.body.appendChild(popupElement);
  const setPopup = (string) => {
    popupElement.innerHTML = string;
  };

  const socket = io('http://localhost:3001');
  socket.on('receiveMessage', (string) => {
    console.log('Message from the server', string);
    setPopup(string);
  });
};

App();
 

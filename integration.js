const App = () => {
  console.log('hello world');
  const scriptTag = document.querySelector('script[token]');
  const token = scriptTag.getAttribute('token');
  console.log(token);
  const domain = window.location.hostname;
  console.log(domain);
  const popupElement = document.createElement('div');
  document.body.appendChild(popupElement);
  const setPopup = (string) => {
    popupElement.innerHTML = string;
  };
  const socket = io('https://popupbackend.onrender.com');
  socket.emit('sendTokenAndDomain', { domainName: "listninja.netlify.app", accessToken: token });
  socket.on('responseAccess', (res) =>
  {
    console.log(res)
    if (res?.success === true)
    {
      console.log("hello")
      socket.on('receiveMessage', (string) => {
        console.log('Message from the server', string);
        setPopup(string);
      });
    }
  });
  console.log('emited');
};

App();


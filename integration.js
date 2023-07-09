const App = () => {

  const domain = window.location.hostname;
  console.log(domain)
  const scriptTag = document.querySelector('script[token]');
  const token = scriptTag.getAttribute('token');
  console.log(token)
  const popupElement = document.createElement('div');
  document.body.appendChild(popupElement);
  const setPopup = (string) => {
    popupElement.innerHTML = string;
  };
  const socket = io('http://localhost:4000');
  // socket.emit('sendTokenAndDomain', {
  //   domainName: domain,
  //   accessToken: token,
  // });
  // socket.on('responseAccess', (res) => {
  //   if (res?.success === true) {
      socket.on('receiveMessage', (string) => {
        console.log('Message from the server', string);
        setPopup(string);
      });
    // }
  // });
  console.log('emited');
};

App();



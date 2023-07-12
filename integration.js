const domain = window.location.hostname;
console.log(domain);
const scriptTag = document.querySelector('script[token]');
const token = scriptTag.getAttribute('token');
console.log(token);
const popupElement = document.createElement('div');
document.body.appendChild(popupElement);
const setPopup = (htmlBlock) =>
{
  popupElement.innerHTML = htmlBlock;
  // const button = document.getElementsByTagName('button');
  // button[1].addEventListener("click", () =>
  // {
  //   const url = 'http://localhost:8000/api/auth/login';
  //   const data = {
  //     email: 'a@gmail.com',
  //     password: 'eepqris123',
  //   };
  // fetch(url, {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify(data),
  // })
  //   .then((response) => {
  //     if (!response.ok) {
  //       throw new Error('Network response was not ok');
  //     }
  //     return response.json();
  //   })
  //   .then((result) => {
  //     console.log(result);
  //   })
  //   .catch((error) => {
  //     console.error('Error:', error);
  //   });
  // })
};
const socket = io('http://localhost:4000');
// socket.emit('sendTokenAndDomain', {
//   domainName: domain,
//   accessToken: token,
// });
// socket.on('responseAccess', (res) => {
//   if (res?.success === true) {
socket.on('receiveMessage', (payload) =>
{
  const {domain,htmlData}=payload
  console.log(htmlData);
  if (domain === window.location.host)
  {
    console.log(htmlData)
    setPopup(htmlData);
  }
});
// }
// });



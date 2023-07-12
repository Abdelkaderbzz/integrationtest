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
  console.log(domain===window.location.host);
  if (domain === window.location.host)
  {
    console.log(htmlData)
    setPopup(htmlData);
  }
});
// }
// });


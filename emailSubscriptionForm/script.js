const scriptURL =
  'https://script.google.com/macros/s/AKfycbwM5auxHz_-4qVN0HEu0jEtSdOEhg3sGPx9dg3K-1STlEJh2S3MhHfSglHrBSIo2sOnvg/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById('msg');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = 'Thank You For Subscribing!';
      setTimeout(function () {
        msg.innerHTML = '';
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error('Error!', error.message));
});

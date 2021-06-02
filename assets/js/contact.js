const scriptURL =
  "https://script.google.com/macros/s/AKfycbz53i7dBCo2ewBl3Xqk9sW2OqOLz63Bcf8qe-8lZ2N5Jtz_6ObGoxn6AtKF_dgInrxf/exec";
const form = document.forms["submit-to-google-sheet"];

form.addEventListener("submit", (e) => {
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => console.log("Success!", response))
    .catch((error) => console.error("Error!", error.message));
});

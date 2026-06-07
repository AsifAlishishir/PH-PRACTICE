// login button functionality
const mobileNumber = 1234567890;
const pinNumber = 1234;

document.getElementById("loginButton").addEventListener("click", function (e) {
  e.preventDefault();

  const mobileNumberValue = document.getElementById("mobile-number").value;
  const mobileNumberValueConverted = parseInt(mobileNumberValue);

  const pinNumberValue = document.getElementById("pin-number").value;
  const pinNumberValueConverted = parseInt(pinNumberValue);

  if (
    mobileNumberValueConverted === mobileNumber &&
    pinNumberValueConverted === pinNumber
  ) {
    window.location.href = "./home.html";
  } else {
    alert("Invalid Credentials");  
  }
});

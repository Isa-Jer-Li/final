// password
function toggleHidePass() {
  let x = document.getElementById("password-input")
  if (x.type === "password") { 
x.type = "text";
} else {
x.type = "password";
}
}

// signup pass
function toggleHidePassSignUp() {
  let x = document.getElementById("sign-up-password-input")
  if (x.type === "password") { 
x.type = "text";
} else {
x.type = "password";
}
}

document.getElementById("log-in-button").addEventListener("click", function() {
  document.getElementById("log-in-overlay").style.display= "block"
})

document.getElementById("close-modal-li").addEventListener("click", function() {
  document.getElementById("log-in-overlay").style.display= "none"
})


document.getElementById("sign-up-button").addEventListener("click", function() {
  document.getElementById("sign-up-overlay").style.display= "block"
})

document.getElementById("close-modal-su").addEventListener("click", function() {
  document.getElementById("sign-up-overlay").style.display= "none"
})


const button = document.createElement('Home');

button.addEventListener('click', event => {
  button.textContent = `Click count: ${event.detail}`;
});

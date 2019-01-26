let modal = document.getElementById('ui-modal-register');
let btn = document.getElementById("open-modal-register");
let span = document.getElementsByClassName("close")[0];

let modalLogin = document.getElementById('ui-modal-login');
let btnLogin = document.getElementById("open-modal-login");
let spanTwo = document.getElementsByClassName("close")[1];


btn.onclick = () => {
  modal.style.display = "block";
}

span.onclick = () => {
  modal.style.display = "none";
}

btnLogin.onclick = () => {
  modalLogin.style.display = "block";
}

spanTwo.onclick = () => {
  modalLogin.style.display = "none";
}


window.onclick = (event) => {
  if (event.target == modalLogin) {
    modalLogin.style.display = "none";
  } else if (event.target == modal) {
    modal.style.display = "none";
  } 
}




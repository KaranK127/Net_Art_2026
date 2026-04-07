let surpriseMessage = "Percy the penguin says hello!";

function changePage() {
  let textElement = document.querySelector("#mainText");
  textElement.innerHTML = surpriseMessage;
  document.body.style.backgroundColor = "lightpink";
  
  let picElement = document.querySelector("#penguinPic");
  picElement.style.display = "block";
}

let button = document.querySelector("#myButton");
button.addEventListener("click", changePage);
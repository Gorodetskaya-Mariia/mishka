var linkOpen = document.querySelectorAll(".add-to-cart");
var linkClose = document.querySelector(".modal__button");
var popup = document.querySelector(".modal-order");
var isStorageSupport = true;
var storage="";

try {
  storage = localStorage.getItem("s-size");
} catch (err) {
  isStorageSupport = false;
}
if (linkOpen && popup && linkClose) {
  for (var i = 0; i < linkOpen.length; i++){
    linkOpen[i].addEventListener("click", function (event) {
      event.preventDefault();
      popup.classList.add("modal-show");
    });
  }
  linkClose.addEventListener("click", function (event) {
    event.preventDefault();
    popup.classList.remove("modal-show");
  });
  window.addEventListener("keydown", function (event) {
    if (event.keyCode === 27) {
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
      }
    }
  });
}

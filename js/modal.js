var linkOpen = document.querySelectorAll(".add-to-cart");
var linkClose = document.querySelector(".modal__button");
var popup = document.querySelector(".modal-order");
var body = document.querySelector("body");
var overlay = document.querySelector(".overlay");
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
      body.style.overflow = "hidden";
      overlay.classList.add("active");
    });
  }
    window.addEventListener("click", function (evt) {
        if(evt.target.classList.contains("modal__button") || evt.target.classList.contains("overlay")){
            event.preventDefault();
            popup.classList.remove("modal-show");
            body.style.overflow = "auto";
            overlay.classList.remove("active");
        }
    });
  window.addEventListener("keydown", function (event) {
    if (event.keyCode === 27) {
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
        body.style.overflow = "auto";
        overlay.classList.remove("active");
      }
    }
  });
}

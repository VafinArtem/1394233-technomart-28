let writeUsButton = document.querySelector(".writeus-btn")
let wrirteUsPopup = document.querySelector(".popup-writeus")
let writeUsClose = document.querySelectorAll(".close-btn")


writeUsButton.addEventListener("click", function() {
    wrirteUsPopup.classList.remove("popup");
});

writeUsClose.addEventListener("click", function() {
    wrirteUsPopup.classList.add("popup");
});
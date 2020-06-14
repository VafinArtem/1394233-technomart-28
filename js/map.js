let mapButton = document.querySelector(".map-link")
let mapPopup = document.querySelector(".popup-map")
let mapClose = mapPopup.querySelector(".close-btn")

mapButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    mapPopup.classList.add("popup");
});

mapClose.addEventListener("click", function() {
    mapPopup.classList.remove("popup");
});
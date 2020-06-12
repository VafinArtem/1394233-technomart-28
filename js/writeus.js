let writeUsButton = document.querySelector(".writeus-btn")
let writeUsPopup = document.querySelector(".popup-writeus")
let writeUsCloses = document.querySelectorAll(".close-btn")
let writeUsForm = writeUsPopup.querySelector(".write-us-form");
let writeUsName = writeUsPopup.querySelector(".write-us-name")
let writeUsEmail = writeUsPopup.querySelector(".writeus-email")
let writeUsMessage = writeUsPopup.querySelector(".write-us-message")

let isStorageSupport = true;
let storageName = "";
let storageEmail = "";

try {
    storageName = localStorage.getItem("name");
    storageEmail = localStorage.getItem("email");
} catch (err) {
    isStorageSupport = false;
}


writeUsButton.addEventListener("click", function() {
    writeUsPopup.classList.remove("popup");

    if (storageName) {
        writeUsName.value = storageName;
        writeUsEmail.focus();
        writeUsEmail.value = storageEmail;
        writeUsMessage.focus();
    } else {
        writeUsName.focus();
    }
});

writeUsCloses[1].addEventListener("click", function() {
    writeUsPopup.classList.add("popup");
});

writeUsForm.addEventListener("submit", function(evt) {
    if (!writeUsName.value || !writeUsEmail.value || !writeUsMessage.value) {
        evt.preventDefault();
    } else {
        if (isStorageSupport) {
            localStorage.setItem("name", writeUsName.value);
            localStorage.setItem("email", writeUsEmail.value);
        }
    }
});
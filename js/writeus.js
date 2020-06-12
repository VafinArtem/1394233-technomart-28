let writeUsButton = document.querySelector(".writeus-btn")
let writeUsPopup = document.querySelector(".popup-writeus")
let writeUsClose = writeUsPopup.querySelector(".close-btn")
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
    writeUsPopup.classList.add("popup");

    if (storageName) {
        writeUsName.value = storageName;
        writeUsEmail.focus();
    } else if (storageName) {
        writeUsEmail.value = storageName;
        writeUsMessage.focus();
    } else writeUsName.focus();
});

writeUsClose.addEventListener("click", function() {
    writeUsPopup.classList.remove("popup");
    writeUsPopup.classList.remove("write-us-error");
});

writeUsForm.addEventListener("submit", function(evt) {
    if (!writeUsName.value || !writeUsEmail.value || !writeUsMessage.value) {
        evt.preventDefault();
        writeUsPopup.classList.remove("write-us-error");
        writeUsPopup.offsetWidth = writeUsPopup.offsetWidth;
        writeUsPopup.classList.add("write-us-error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("name", writeUsName.value);
            localStorage.setItem("email", writeUsEmail.value);
        }
    }
});

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        if (writeUsPopup.classList.contains("popup")) {
            evt.preventDefault();
            writeUsPopup.classList.remove("popup");
            writeUsPopup.classList.remove("write-us-error");
        }
    }
});
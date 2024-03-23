let popup = document.getElementById("popup");
let openingPopup = document.getElementById("openPopup");
let closeingPopup = document.getElementById("closePopup");

function openPopup() {
  popup.classList.add("open-popup");
}
function closePopup() {
  popup.classList.remove("open-popup");
}

openingPopup.onclick = function() {
    openPopup();
    console.log("clicked")
};

closeingPopup.onclick = function() {
  closePopup();
};
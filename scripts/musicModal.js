
const span = document.getElementsByClassName('close')[0];

const modal = document.getElementById('music-modal');


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};


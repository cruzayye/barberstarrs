
const span = document.getElementsByClassName('close')[0];

const modal = document.getElementById('music-modal');

const hideModal = () => {
  modal.style.display = 'none';
};

const playMusic = () => {
  document.getElementById('audio').play();
};

window.onclick = function(event) {
  if(event.target === modal) {
    playMusic();
    hideModal();
  }
};


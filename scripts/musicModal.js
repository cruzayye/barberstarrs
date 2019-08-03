
const span = document.getElementsByClassName('close')[0];

const modal = document.getElementById('music-modal');

const yes = document.getElementById('yes-btn');

const no = document.getElementById('no-btn');

const hideModal = () => {
  modal.style.display = 'none';
};

const playMusic = () => {
  document.getElementById('audio').play();
};

window.onclick = function(event) {
  if(event.target === modal || event.target === yes) {
    playMusic();
    hideModal();
  } else if(event.target === no) {
    hideModal();
  }
};


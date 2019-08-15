
const span = document.getElementsByClassName('close')[0];
const modal = document.getElementById('music-modal');
const yes = document.getElementById('yes-btn');
const no = document.getElementById('no-btn');
const body = document.getElementById('body');
document.body.style.position = 'fixed';
document.body.style.top = `-${window.scrollY}px`;

const hideModal = () => {
  modal.style.display = 'none';
  body.style.overflow = 'scroll';
  document.body.style.position = 'static';
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

// window.onload = function() {
//   document.getElementById('audio').play();
// };


const initialDiv = document.querySelector('#initial');
const colleaguesDiv = document.querySelector('#colleagues');
const visitorsDiv = document.querySelector('#visitors');
const colleaguesBtn = document.querySelector('#colleaguesBtn');
const visitorsBtn = document.querySelector('#visitorsBtn');

colleaguesBtn.addEventListener('click', function(e) {
  initialDiv.style.display = 'none';
  colleaguesDiv.style.display = 'block';

  playSound();
});

visitorsBtn.addEventListener('click', function(e) {
  initialDiv.style.display = 'none';
  visitorsDiv.style.display = 'block';
});

backBtn.addEventListener('click', function(e) {
  initialDiv.style.display = 'block';
  visitorsDiv.style.display = 'none';
  colleaguesDiv.style.display = 'none';
});

const playSound = () => {
  var sound = document.getElementById('audio');
  sound.play();
};

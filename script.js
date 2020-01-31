const initialDiv = document.querySelector('#initial');
const colleaguesDiv = document.querySelector('#colleagues');
const visitorsDiv = document.querySelector('#visitors');
const colleaguesBtn = document.querySelector('#colleaguesBtn');
const visitorsBtn = document.querySelector('#visitorsBtn');
const backBtn = document.querySelector('#backBtn');
const input = document.querySelector('#input1');
const inputVisitors = document.querySelector('#input1Visitors');
const colleaguesListBtn = document.querySelector('#colleaguesListBtn');
const visitorsListBtn = document.querySelector('#visitorsListBtn');
const colleaguesListDiv = document.querySelector('#colleaguesListDiv');
const visitorsListDiv = document.querySelector('#visitorsListDiv');

colleaguesBtn.addEventListener('click', function(e) {
  initialDiv.style.display = 'none';
  colleaguesDiv.style.display = 'block';
  backBtn.style.display = 'block';
  input.focus();

  playSound();
});

visitorsBtn.addEventListener('click', function(e) {
  initialDiv.style.display = 'none';
  visitorsDiv.style.display = 'block';
  backBtn.style.display = 'block';
  inputVisitors.focus();
});

colleaguesListBtn.addEventListener('click', function(e) {
  initialDiv.style.display = 'none';
  visitorsDiv.style.display = 'none';
  colleaguesDiv.style.display = 'none';
  visitorsListDiv.style.display = 'none';

  colleaguesListDiv.style.display = 'block';
  backBtn.style.display = 'block';
});

visitorsListBtn.addEventListener('click', function(e) {
  initialDiv.style.display = 'none';
  visitorsDiv.style.display = 'none';
  colleaguesDiv.style.display = 'none';
  colleaguesListDiv.style.display = 'none';

  visitorsListDiv.style.display = 'block';
  backBtn.style.display = 'block';
});

backBtn.addEventListener('click', function(e) {
  initialDiv.style.display = 'block';
  visitorsDiv.style.display = 'none';
  colleaguesDiv.style.display = 'none';
  backBtn.style.display = 'none';
  colleaguesListDiv.style.display = 'none';
  visitorsListDiv.style.display = 'none';
});

const playSound = () => {
  var sound = document.getElementById('audio');
  sound.play();
};

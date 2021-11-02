const bulb = document.getElementById('bulb');
const bulbOnBtn = document.getElementById('on-btn');
const bulbOffBtn = document.getElementById('off-btn');

bulbOnBtn.addEventListener('click', () => {
    bulb.src = 'img/bulb-on.png';
});

bulbOffBtn.addEventListener('click', () => {
    bulb.src = 'img/bulb-off.png';
});
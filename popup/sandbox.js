const popupOpenBtn = document.querySelector('.popup-open-btn');
const popupWrapper = document.querySelector('.popup-wrapper');
const popupCloseBtn = document.querySelector('.popup-close-btn');

popupOpenBtn.addEventListener('click', () => {
    popupWrapper.style.display = 'block';
})

popupCloseBtn.addEventListener('click', () => {
    popupWrapper.style.display = 'none';
})

popupWrapper.addEventListener('click', () => {
    popupWrapper.style.display = 'none';
})
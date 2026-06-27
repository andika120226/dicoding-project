
const imagePopup = document.getElementById('imagePopup');
const popupImg = document.getElementById('popupImg');
const popupTitle = document.getElementById('popupTitle');
const closeBtn = document.querySelector('.close-btn');


const viewButtons = document.querySelectorAll('.view-btn');


viewButtons.forEach(button => {
  button.addEventListener('click', function() {

    const targetImageSrc = this.getAttribute('data-img');
    const targetTitle = this.getAttribute('data-title');
    

    popupImg.src = targetImageSrc;
    popupTitle.textContent = targetTitle;
    

    imagePopup.classList.add('show');
  });
});


closeBtn.addEventListener('click', function() {
  imagePopup.classList.remove('show');
});

window.addEventListener('click', function(event) {
  if (event.target === imagePopup) {
    imagePopup.classList.remove('show');
  }
});
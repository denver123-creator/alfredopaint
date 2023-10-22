//////////////page 1 home page//////////////
const imagesForSlides = ['users/user1/workpic/pic01.webp', 'users/user1/workpic/pic02.webp', 'users/user1/workpic/pic05.webp'];
const homepage = document.getElementById('home');

function slidesShow() {
  
  const slideImage = document.getElementById('slideImage');
  let slideIndex = 0;
  let intervalId; 

  function updateSlideImage() {
    slideImage.src = imagesForSlides[slideIndex];
    slideImage.classList.remove('fade');
  }

  function showNextSlide() {
    slideIndex = (slideIndex + 1) % imagesForSlides.length;
    slideImage.classList.add('fade');
    updateSlideImage();
  }

  updateSlideImage();
  intervalId = setInterval(showNextSlide, 3000);
  return intervalId; 
}

let intervalId; 

const handleVisibility = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      clearInterval(intervalId); 
      intervalId = slidesShow(); 
    } else {
      clearInterval(intervalId);
      closeVideoModal();
      closeImg();
    }
  });
};
const observer = new IntersectionObserver(handleVisibility);
observer.observe(homepage);

window.addEventListener('popstate', function (event) {
  if (!observer.observe(homepage)) {
      closeVideoModal();
      closeImg();
  }
});  

/////////////////////////

let homePage = '';

homePage += `
  <header>
      <h1 >${user1[0].name}</h1>
      <img src="assets/css/images/philippines.png" alt="philippine flag">
        <p id="typing-text"><strong>${user1[0].profession}</strong></p>
  </header>
  <a href="#work" class="jumplink pic">
  <span class="arrow icon solid fa-chevron-right"><span>See my work</span></span>
  <div class="mySlides">
    <img src="${imagesForSlides[0]}" alt="profile" style="width:100%" id="slideImage" />
  </div>
</a>
`;
/////////////// Work page page 2 /////////////////

let workPage = '';

userWorks.forEach((userWork) => {
  workPage += `
    <section>
      <div class="row">`;

  userWork.workpics.forEach((workpic, index) => {
    workPage += `
      <div class="col-4 col-6-medium col-12-small img-gallery">
        <img src="${workpic}" alt="Work Image ${index + 1}" class="image fit" data-index="${index}">
      </div>
    `;
  });

  workPage += `
      </div>
    </section>
  `;
});
  
////////////// Product page 3 ///////////////////

let productPage = "";

userProducts.forEach((userProduct, index) => {
  productPage += `
      <div class="product-box popular-block">

                <div class="inner-box">
                  <div class="image-box">  
                      <img src="${userProduct.image}" alt="Product Image" width="644" height="859">
                   </div>
                </div>

          <h2>${userProduct.title}</h2>
          <div class="product-content">
              <p>${userProduct.description}</p>
              <p>$ ${userProduct.price}</p>
              <button class="play-button" data-video-index="${index}">Play</button>
          </div>
      </div>`;
});

////////////////////////////////////////////

document.querySelector('.intro').innerHTML = homePage;   
document.getElementById('works').innerHTML = workPage; 
document.querySelector('.products').innerHTML = productPage;

/////////////// Work page page 2 imgage zoomer  //////////////
const fullImgBox = document.getElementById('fullImgBox');
const fullImg = document.getElementById('fullImg');
const closeImage = document.getElementById('closeImage');

const thumbnailImages = document.querySelectorAll('.img-gallery img');
const ings = document.querySelector('.row');

function openImg(event) {
  const index = event.target.getAttribute('data-index');
  const imageUrl = userWorks[0].workpics[index];

  fullImg.src = imageUrl;
  fullImgBox.style.display = 'flex';
}

function closeImg() {
  fullImgBox.style.display = 'none';
}

fullImgBox.addEventListener("click", function (event) {
  if (event.target === this) {
       closeImg();
  }
});

thumbnailImages.forEach((img) => {
  img.addEventListener('click', openImg);
 
});

closeImage.addEventListener('click', closeImg);

////////////////////product modal video/////////////////////////////

const videoModal = document.getElementById("video-modal");
const modalVideo = document.getElementById("modal-video");
const closeButton = document.getElementById("close-button");

// Add event listeners to the "Play" buttons
const playButtons = document.querySelectorAll(".play-button");
playButtons.forEach((button) => {
    button.addEventListener("click", function () {
        const videoIndex = this.getAttribute("data-video-index");
        const videoUrl = userProducts[videoIndex].video;
        openVideoModal(videoUrl);
    });
});

function openVideoModal(videoUrl) {
    modalVideo.src = videoUrl;
    videoModal.style.display = "flex"; 
}

function closeVideoModal() {
  modalVideo.pause();
  modalVideo.src = ""; 
  videoModal.style.display = "none"; 
}

videoModal.addEventListener("click", function (event) {
  if (event.target === this) {
      closeVideoModal();
  }
});

closeButton.addEventListener("click", closeVideoModal);

/////imports ///////////////////////////////////////////////////////////

import * as Email from "./email.js";
import * as Navbartwo from "./navbar.js";
import * as Aigen from "./imageaigen.js";
import * as Zoom from "./zoomhandler.js";

const user1 = [{
    name: "Alfredo Publico",
    profession: "<span style=\"font-style:italic;\">Masterful Brushstrokes - </span>Discover the Artistry <br> of Canvas Creations.",
    profilepic: "users/user1/profpic/pic01.jpg",
    workpics: []
}];

const userWorks = [{
  workpics: [
      "users/user1/workpic/pic01.webp",
      "users/user1/workpic/pic22.webp",
      "users/user1/workpic/pic02.webp",
      "users/user1/workpic/pic04.webp",
      "users/user1/workpic/pic07.webp",
      "users/user1/workpic/pic18.webp",
      "users/user1/workpic/pic05.webp",
      "users/user1/workpic/pic06.webp",
      "users/user1/workpic/pic21.webp",
      "users/user1/workpic/pic08.webp",
      "users/user1/workpic/pic09.webp",
      "users/user1/workpic/pic10.webp",
      "users/user1/workpic/pic11.webp",
      "users/user1/workpic/pic12.webp",
      "users/user1/workpic/pic13.webp",
      "users/user1/workpic/pic14.webp",
      "users/user1/workpic/pic15.webp",
      "users/user1/workpic/pic16.webp",
      "users/user1/workpic/pic17.webp",
      "users/user1/workpic/pic19.webp",
      "users/user1/workpic/pic20.webp",
      "users/user1/workpic/pic03.webp"
  ]
}];

const userProducts = [{
        title: "Guns and Roses",
        description: `A captivating painting of two vibrant,fully blossomed roses, 
        radiating timeless beauty and romance with meticulous attention 
        to detail and expert rendering.`,
        image: "users/user1/product-image/1.webp",
        video: "users/user1/product-video/video1.mp4",
        price: 99.99
     },{
        title: "House of the Rising Sun",
        description: `There is a house way down in New Orleans
        They call the Rising Sun
        And it's been the ruin of many a poor boy
        And God I know I'm one.`,
        image: "users/user1/product-image/2.webp",
        video: "users/user1/product-video/video2.webm",
        price: 999.99
    }, {
        title: "Hotel California",
        description: `Welcome to the Hotel California
        Such a lovely place 
        Plenty of room at the Hotel California
        Any time of year
        You can find it here.`,
        image: "users/user1/product-image/3.webp",
        video: "users/user1/product-video/video3.webm",
        price: 9999.99
}];

//////////////page 1 home page//////////////
const imagesForSlides = ['users/user1/workpic/pic01.webp', 'users/user1/workpic/pic02.webp', 'users/user1/workpic/pic05.webp'];
    
document.addEventListener('DOMContentLoaded', function () {
    
    const slideImage = document.getElementById('slideImage');
    const imagesForSlides = ['users/user1/workpic/pic01.webp', 'users/user1/workpic/pic02.webp', 'users/user1/workpic/pic05.webp'];
    let slideIndex = 0;
    let intervalId; // Declare a variable to store the interval ID
  
    function updateSlideImage() {
      setTimeout(function () {
        slideImage.src = imagesForSlides[slideIndex];
        slideImage.classList.remove('fade');
      }, 1000);
    }
  
    function showNextSlide() {
      slideIndex = (slideIndex + 1) % imagesForSlides.length;
      slideImage.classList.add('fade');
      updateSlideImage();
    }
  
    updateSlideImage();
  
    // Start the slideshow and store the interval ID
    intervalId = setInterval(showNextSlide, 5000);

    window.addEventListener('popstate', function (event) {
      const currentURL = window.location.href.split('#')[0].split('?')[0]; // Remove query parameters and hash
      const allowedURLs2 = [
          "https://denver123-creator.github.io/alfredopaint/#",
          "https://alfredopaint.pages.dev/#"
      ];
  
      if (allowedURLs2.includes(currentURL)) {
          clearInterval(intervalId);
          intervalId = setInterval(showNextSlide, 3000);
      } else {
          clearInterval(intervalId);
          closeVideoModal();
          closeImg();
      }
  });  
  });

let homePage = '';

homePage += `
  <header>
      <h1 >${user1[0].name}</h1>
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
      <div id="product-box">
          <img src="${userProduct.image}" alt="Product Image" width="644" height="859">
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

// Function to open the video modal and play the video
function openVideoModal(videoUrl) {
    modalVideo.src = videoUrl;
    videoModal.style.display = "flex"; // Display the modal
}

// Event listener for the close button
function closeVideoModal() {
  modalVideo.pause();
  modalVideo.src = ""; // Clear the video source
  videoModal.style.display = "none"; // Hide the modal
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





(function(){

    function showMessagePopup() {
        const wrapper = document.getElementById('wrapper'); 
        const popup = document.createElement('div');
        popup.classList.add('popup');
    
        let bottomNav = `<nav id="nav">
                              <a href="#" aria-label="Welcome to my home" class="icon solid "><img src="assets/css/images/home.webp" alt="homepage"><span>Home</span></a>
                              <a href="#work" aria-label="View my works" class="icon solid "><img src="assets/css/images/paint-roller.webp" alt="workpage"><span>Work</span></a>
                              <a href="#product" aria-label="Buy my latest paintings" class="icon solid"><img src="assets/css/images/art-and-design.webp" alt="productpage"><span>Product</span></a>
                              <a href="#ai" aria-label="Want some ai image" class="icon solid"><img src="assets/css/images/paint-palette.webp" alt="ai"><span>AI Image Gen</span></a>
                              <a href="#contact" class="icon solid"><img src="assets/css/images/email.webp" alt="contact"><span>Contact</span></a>
                              <a href="https://www.facebook.com/alfredo.publico" aria-label="Chat me at my facebook" class="icon"><img src="assets/css/images/facebook.webp" alt="facebook"><span>Facebook</span></a>
                        </nav>`;		
        popup.innerHTML = bottomNav;
        wrapper.appendChild(popup);
        }
        showMessagePopup();

// Cache DOM elements
const navTwo = document.querySelector('.popup');
const mainElement = document.getElementById('main');
const homeElement = document.getElementById('home');
const bodyElement = document.body;

// Constants
const triggerScrollPosition = 120;
const homeHeight = homeElement.getBoundingClientRect().height;

// Function to update popup visibility
function updatePopupVisibility() {
    const distanceFromTop = mainElement.getBoundingClientRect().top;
    const isAtTop = window.scrollY === triggerScrollPosition;
  
    if (window.scrollY === 0) {
      navTwo.style.display = "none"; // Hide when at the top
    } else if (distanceFromTop <= isAtTop + homeHeight ) {
      navTwo.style.display = "block";
      setTimeout(() => {
        navTwo.style.opacity = '1';
      }, 10);
    } else {
      navTwo.style.opacity = '0';
      setTimeout(() => {
        navTwo.style.display = 'none';
      }, 1000);
    }
  }
// Scroll event listener with debounce
let debounceTimer;
window.addEventListener("scroll", function() {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(updatePopupVisibility, 100);
});

// Window onload event listener
window.onload = function() {
  window.addEventListener('popstate', function(event) {
    const currentURL = window.location.href;
    const url = "https://denver123-creator.github.io/alfredopaint.io/#";
    const url2 = "https://denver123-creator.github.io/alfredopaint.io/";
    const url3 = "https://alfredopaint.pages.dev/#";
      const url4 = "https://alfredopaint.pages.dev/";

    if (currentURL === url || currentURL === url2 || currentURL === url3 || currentURL === url4 ) {
      navTwo.style.display = "none";
      bodyElement.style.overflow = "hidden";
    } else {
      bodyElement.style.overflow = "";
    }
  });
};

// Initial call to update popup visibility when the page loads
updatePopupVisibility();
    
}());

function showMessagePopup() {
        const wrapper = document.getElementById('wrapper'); 
        const popup = document.createElement('div');
        popup.classList.add('popup');
    
        let bottomNav = `<nav id="nav">
                        <a href="#" class="icon solid fa-home" id="a"><span>Home</span></a>
                        <a href="#work" class="icon solid fa-folder" id="b"><span>Work</span></a>
                        <a href="#product" class="icon solid fa-paint-roller"><span>Product</span></a>
                        <a href="#contact" class="icon solid fa-envelope"  id="c"><span>Contact</span></a>
                        <a href="#ai" class="icon solid fa-image"><span>AI Image Gen</span></a>
                        <a href="https://www.facebook.com/alfredo.publico" class="icon brands fa-facebook" id="d"><span>Facebook</span></a>
                        </nav>`;		
        popup.innerHTML = bottomNav;
        wrapper.appendChild(popup);
    }

    showMessagePopup()

     window.addEventListener("scroll", function() {
        const navTwo = document.querySelector('.popup');
        const mainElement = document.getElementById('main');
        const homeElement = document.getElementById('home'); 
        const distanceFromTop = mainElement.getBoundingClientRect().top;
        const triggerScrollPosition = 120; 
        const homeHeight = homeElement.getBoundingClientRect().height;
        const isAtTop = window.scrollY === triggerScrollPosition;

        if (isAtTop || distanceFromTop <= homeHeight - triggerScrollPosition ) {
            navTwo.style.display = "block";  
            function showPopup() {
                setTimeout(() => {
                  navTwo.style.opacity = '1';
                }, 10);
              }  
              return showPopup();
        } else {
            function hidePopup() {
                navTwo.style.opacity = '0'; 
                setTimeout(() => {
                    navTwo.style.display = 'none'; 
                }, 1000);
              }
              return hidePopup()
        }
    });



  window.addEventListener('popstate', function (event) {
            const navTwo = document.querySelector('.popup');
            const bodyElement = document.body;
            const currentURL = window.location.href;
            const url = "https://denver123-creator.github.io/alfredopaint.io/#";
            const url2 = "https://denver123-creator.github.io/alfredopaint.io/";
               if(currentURL === url || currentURL === url2){
                    navTwo.style.display = "none";
                    bodyElement.style.overflow = "hidden";
               }else {
                    bodyElement.style.overflow = "";
        }
});


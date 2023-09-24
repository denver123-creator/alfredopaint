const user1 = [{
    name: "Alfredo Publico",
    profession: "<span style=\"font-style:italic;\">Masterful Brushstrokes - </span>Discover the Artistry of Canvas Creations.",
    profilepic: "users/user1/profpic/pic01.jpg",
    workpics: []
}];


const userWorks = [{
        workpics:[ "users/user1/workpic/pic01.jpg","users/user1/workpic/pic02.jpg","users/user1/workpic/pic04.jpg",
                   "users/user1/workpic/pic03.jpg","users/user1/workpic/pic05.jpg","users/user1/workpic/pic06.jpg",
                   "users/user1/workpic/pic21.jpg","users/user1/workpic/pic08.jpg","users/user1/workpic/pic09.jpg",
                   "users/user1/workpic/pic10.jpg","users/user1/workpic/pic11.jpg","users/user1/workpic/pic12.jpg",
                   "users/user1/workpic/pic13.jpg","users/user1/workpic/pic14.jpg","users/user1/workpic/pic15.jpg",
                   "users/user1/workpic/pic16.jpg","users/user1/workpic/pic17.jpg","users/user1/workpic/pic19.jpg",
                   "users/user1/workpic/pic18.jpg","users/user1/workpic/pic20.jpg","users/user1/workpic/pic07.jpg",           
    ]}];


const imagesForSlides = ['users/user1/workpic/pic01.jpg', 'users/user1/workpic/pic02.jpg', 'users/user1/workpic/pic05.jpg'];
    

//////////////////////////////

document.addEventListener('DOMContentLoaded', function () {
    
    const slideImage = document.getElementById('slideImage');
    const imagesForSlides = ['users/user1/workpic/pic01.jpg', 'users/user1/workpic/pic02.jpg', 'users/user1/workpic/pic05.jpg'];
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
    const currentURL = window.location.href;
    const url1 = "https://denver123-creator.github.io/alfredopaint.io/#";
    console.log('Back button pressed');
       // You can now use the 'currentURL' variable to work with the current URL
       console.log('Current URL:', currentURL);
       if(currentURL === url1 ){
            clearInterval(intervalId);
            intervalId = setInterval(showNextSlide, 3000);
       }else{
             clearInterval(intervalId);
       }
    });

   
  });

////////////////////////////////



let html = '';

html += `
  <header>
    <h1>${user1[0].name}</h1>
    <p><strong>${user1[0].profession}</strong></p>
  </header>

  <a href="#work" class="jumplink pic">
  <span class="arrow icon solid fa-chevron-right"><span>See my work</span></span>
  <div class="mySlides">
    <img src="${imagesForSlides[0]}" alt="profile" style="width:100%" id="slideImage" />
  </div>
</a>
`;

//////////////////////////////////

        let usersWork = '';

        userWorks.forEach((userWork) => {
            usersWork += `
                <section>
                    <div class="row">        
            `;
            userWork.workpics.forEach((workpic, index) => {
                usersWork += `
                        <div class="col-4 col-6-medium col-12-small" >
                            <img src="${workpic}" alt="Work Image ${index + 1}" class="image fit">
                        </div>                
                `;
            });
            usersWork += `
                </section>
            `;
        });
///////////////////////////////////

document.querySelector('.intro').innerHTML = html;   
document.getElementById('works').innerHTML = usersWork; 



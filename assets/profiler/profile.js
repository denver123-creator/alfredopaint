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

const userProducts = [{

        title: "Guns and Roses",
        description: `A captivating painting of two vibrant,fully blossomed roses, 
        radiating timeless beauty and romance with meticulous attention 
        to detail and expert rendering.`,
        image: "users/user1/product-image/1.jpg",
        price: 99.99
     },{
        title: "House of the Rising Sun",
        description: `There is a house way down in New Orleans
        They call the Rising Sun
        And it's been the ruin of many a poor boy
        And God I know I'm one.`,
        image: "users/user1/product-image/2.jpg",
        price: 999.99
    }, {
        title: "Hotel California",
        description: `Welcome to the Hotel California
        Such a lovely place 
        Plenty of room at the Hotel California
        Any time of year
        You can find it here.`,
        image: "users/user1/product-image/3.jpg",
        price: 9999.99  
}];  


//////////////page 1 home page//////////////
const imagesForSlides = ['users/user1/workpic/pic01.jpg', 'users/user1/workpic/pic02.jpg', 'users/user1/workpic/pic05.jpg'];
    
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
       if(currentURL === url1 ){
            clearInterval(intervalId);
            intervalId = setInterval(showNextSlide, 3000);
       }else{
             clearInterval(intervalId);
       }
    });  
  });


let homePage = '';

homePage += `
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

/////////////// Work page page 2 /////////////////
  let wokPage = '';

        userWorks.forEach((userWork) => {
          wokPage += `
                <section>
                    <div class="row"> `;
            userWork.workpics.forEach((workpic, index) => {
              wokPage += `
                        <div class="col-4 col-6-medium col-12-small" >
                           <img src="${workpic}" alt="Work Image ${index + 1}" class="image fit">
                        </div>`;});
              wokPage += `
                </section>`;
        });
////////////// Product page 3 ///////////////////

            let productPage = "";

            userProducts.forEach((userProduct) => {

              productPage += `
                        <div id="product-box">
                        <img src="${userProduct.image}" alt="Product Image">
                            <h2>"${userProduct.title}"</h2>
                              <div class="product-content">
                              <p>${userProduct.description}</p>
                              <p>$ ${userProduct.price}</p>
                              <button >Buy now</button>
                            </div>
                          </div>`
            });

////////////////////////////////////////////


document.querySelector('.intro').innerHTML = homePage;   
document.getElementById('works').innerHTML = wokPage; 
document.querySelector('.products').innerHTML = productPage;



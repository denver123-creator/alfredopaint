const submitIcon = document.getElementById('submit-icon');
const inputQuery = document.getElementById('inputQuery');
const imageContainer = document.querySelector('.generatedImage');



async function query(data) {

    if(inputQuery.value == ""){
        console.log("no data");
        inputQuery.style.borderColor = "red";
   
        return;
    }

    try {
        // Remove existing image elements from the container
        while (imageContainer.firstChild) {
            imageContainer.removeChild(imageContainer.firstChild);
        }

        spinnerAnimate();

        const response = await fetch(
            "https://api-inference.huggingface.co/models/runwayml/stable-diffusion-v1-5",
            {
                headers: { Authorization: "Bearer " },
                method: "POST",
                body: JSON.stringify(data),
            }
        );

        
        if (!response.ok) {
            //throw new Error(`API request failed with status: ${response.status}`);
            const responseHereDiv = document.querySelector('.generatedImage');
            const createImage = document.createElement('img');
            const image = "req/503.jpg";
            createImage.src = image;
            responseHereDiv.appendChild(createImage);
           
            function spinnerAnimateStop() {
              const responseDiv = document.querySelector('.response-here');
              responseDiv.innerHTML = ''; // Clear the content to stop the spinner
              }
               
            return spinnerAnimateStop();

        }

        const imageBlob = await response.blob();

        // Assuming you have an HTML img element with the ID 'image-result'
        const imageElement = document.createElement("img");
        imageElement.src = URL.createObjectURL(imageBlob);
        imageContainer.appendChild(imageElement);
        const responseHereDiv = document.querySelector('.response-here');

        if (response.ok) {
            // Remove the first div inside the .response-here div
            const firstDiv = responseHereDiv.querySelector('div');
            if (firstDiv) {
                responseHereDiv.removeChild(firstDiv);
                }
            }
            

    } catch (error) {
        console.error(error);
    }
}

submitIcon.addEventListener('click', () => {
    const queryText = inputQuery.value;
    query({ "inputs": queryText });
});



inputQuery.addEventListener('click', () => {
  
    const generatedImage = document.querySelector('.generatedImage');
    const imgElement  = generatedImage.querySelector('img'); 

    // Clear the input field when the userInput div is clicked
    inputQuery.value = '';
    inputQuery.placeholder  = '';
    inputQuery.style.borderColor = "red";

    if (imgElement) {
        generatedImage.removeChild(imgElement);
        }

});

inputQuery.addEventListener('blur', () => {
    // Set the placeholder back when the input field loses focus
    inputQuery.placeholder = '    Write here';
 
});



function spinnerAnimate(){
    const responseDiv =  document.querySelector('.response-here');
    
    responseDiv.innerHTML = `<div class="ring">Loading
                                 <span class="loader"></span>
                            </div>`;
}







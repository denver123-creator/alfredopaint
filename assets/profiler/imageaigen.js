const submitIcon = document.getElementById('submit-icon');
const inputQuery = document.getElementById('inputQuery');
const imageContainer = document.querySelector('.generatedImage');
const responseDiv = document.querySelector('.response-here');
const titleParagraph = document.querySelector('.titleParagraph');
const submitButton = submitIcon.querySelector('button');

async function query(data) {

    if(inputQuery.value == ""){
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
                headers: { Authorization: "Bearer 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" },
                method: "POST",
                body: JSON.stringify(data),
            }
        );
  
        if (!response.ok) {
            //throw new Error(`API request failed with status: ${response.status}`);
            const createImage = document.createElement('img');
            const image = "req/503.jpg";
            createImage.src = image;
            imageContainer.appendChild(createImage);
           
            function spinnerAnimateStop() {
              responseDiv.innerHTML = ''; // Clear the content to stop the spinner
              }
               
            return spinnerAnimateStop();

        }

        const imageBlob = await response.blob();
        // Assuming you have an HTML img element with the ID 'image-result'
        const imageElement = document.createElement("img");
        imageElement.src = URL.createObjectURL(imageBlob);
        imageContainer.appendChild(imageElement);
    

        if (response.ok) {
            // Remove the first div inside the .response-here div
            const inputTextTitle = document.createElement('p');
            inputTextTitle.textContent = inputQuery.value;
            titleParagraph.appendChild(inputTextTitle);
            const firstDiv = responseDiv.querySelector('div');
            inputQuery.disabled = false;

            if (firstDiv) {
                responseDiv.removeChild(firstDiv);
                responseDiv.style.marginTop = '0px';
                }
            }
            

    } catch (error) {
        console.error(error);
    }
}

submitIcon.addEventListener('click', () => {
    const queryText = inputQuery.value;
    query({ "inputs": queryText });
   
    if(inputQuery.value == ""){
        inputQuery.disabled = false;
        submitButton.disabled = false;
    }else{
        inputQuery.disabled = true;
        submitButton.disabled = true;
    }

  });


    inputQuery.addEventListener('click', () => {
        const imgElements = imageContainer.querySelectorAll('img');
        const paragraphTitles = titleParagraph.querySelectorAll('p');
      
        // Clear the input field when the userInput div is clicked
        inputQuery.value = '';
        inputQuery.placeholder = '';
        inputQuery.style.borderColor = "red";
        responseDiv.style.marginTop = '25%';
        submitButton.disabled = false;
      
        // Remove all image elements
        imgElements.forEach((imgElement) => {
          imgElement.parentNode.removeChild(imgElement);
        });
      
        // Remove all paragraph elements
        paragraphTitles.forEach((paragraphTitle) => {
          paragraphTitle.parentNode.removeChild(paragraphTitle);
        });
      });
      
      inputQuery.addEventListener('blur', () => {
        inputQuery.placeholder = 'Write here';
      });


    function spinnerAnimate(){
        responseDiv.innerHTML = `<div class="ring">Loading
                                    <span class="loader"></span>
                                </div>`;
    }


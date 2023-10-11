// BARYABOL//
const errMessage = document.getElementById('errMessage');
const emailInput = document.getElementById('emailInput');
const subjectInput = document.getElementById('subjectInput');
const nameInput = document.getElementById('nameInput');
const messageInput = document.getElementById('messageInput');
const sendeMail = document.getElementById('sendeMail');


window.addEventListener('load', function() {
    if (localStorage.getItem("emailSent") === "true") {
        // Hide form elements
        nameInput.style.display = "none";
        emailInput.style.display = "none";
        subjectInput.style.display = "none";
        messageInput.style.display = "none";
        sendeMail.style.display = "none";
        errMessage.innerHTML = "Your message peacefully and successfully sent thank you ✌️ 😊";
    }
});

function sendMail() {

    function sanitizeInput(input) {
        return input.replace(/[^a-zA-Z0-9 ]/g, '');
    }

    const sanitizedName = sanitizeInput(nameInput.value);
    const sanitizedMessage = sanitizeInput(messageInput.value);
    const sanitizedSubject = sanitizeInput(subjectInput.value);

    if (sanitizedName === "" || sanitizedMessage === "" || sanitizedSubject === "" || emailInput.value === "") {
        errMessage.innerText = "Please complete the entire form 😊";
        errMessage.classList.toggle("error-emphasis");
        return;
    }

    // Continue with email validation
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+/;
        return emailRegex.test(email);
    }

    if (!validateEmail(emailInput.value)) {
        //console.log("Invalid email address");
        emailInput.style.color = "red";
        errMessage.innerText = "Invalid email address 😲 WTF!";
        errMessage.classList.toggle("error-emphasis");
        return;
    }
     //////////////////////////////////////

      const params = {
        name: nameInput.value,
        email: emailInput.value,
        message: `Subject: ${subjectInput.value} Message: ${messageInput.value}`
      };
  
      const serviceID = "service_asbx5cp";
      const templateID = "template_mjgsvsb";
  
      emailjs.send(serviceID, templateID, params)
        .then(res => {
          //console.log(res);
          if (localStorage.getItem("emailSent") !== "true") {
            // Enable form inputs
            nameInput.disabled = false;
            emailInput.disabled = false;
            subjectInput.disabled = false;
            messageInput.disabled = false;
            sendeMail.disabled = false;
            // Clear form inputs
            nameInput.value = "";
            emailInput.value = "";
            subjectInput.value = "";
            messageInput.value = "";
        }

            localStorage.setItem("emailSent", "true");
            // Hide form elements
            nameInput.style.display = "none";
            emailInput.style.display = "none";
            subjectInput.style.display = "none";
            messageInput.style.display = "none";
            sendeMail.style.display = "none";
            //alert("Your message sent successfully!!");
            errMessage.innerHTML = "Your message peacefully and successfully sent thank you ✌️ 😊";
        })

        .catch(err => console.log(err));
  }
  
  function burahinAngNakaraan() {
    errMessage.innerHTML = "";
  }

  sendeMail.addEventListener('click', sendMail);
  emailInput.addEventListener('input', burahinAngNakaraan );



// BARYABOL
const getElement = (id) => document.getElementById(id);

const errMessage = getElement('errMessage');
const emailInput = getElement('emailInput');
const subjectInput = getElement('subjectInput');
const nameInput = getElement('nameInput');
const messageInput = getElement('messageInput');
const sendeMail = getElement('sendeMail');

window.addEventListener('load', function() {
    const emailSent = localStorage.getItem("emailSent") === "true";
    if (emailSent) {
        // Hide form elements
        [nameInput, emailInput, subjectInput, messageInput, sendeMail].forEach(element => {
            element.style.display = "none";
        });
        errMessage.innerHTML = "Your message was peacefully and successfully sent. Thank you! ✌️ 😊";
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
  
      const serviceID = "service_d11rxmz";
      const templateID = "template_mjgsvsb";

      sendeMail.disabled = true; // to avoid double send
        
      emailjs.send(serviceID, templateID, params)
      .then(res => {
        if (localStorage.getItem("emailSent") !== "true") {
          // Enable form inputs
          [nameInput, emailInput, subjectInput, messageInput, sendeMail].forEach(input => {
            input.disabled = false;
            input.value = "";
          });
    
          localStorage.setItem("emailSent", "true");
    
          // Hide form elements
          [nameInput, emailInput, subjectInput, messageInput, sendeMail].forEach(element => {
            element.style.display = "none";
          });
    
          errMessage.innerHTML = "Your message was peacefully and successfully sent. Thank you! ✌️ 😊";
        }
      })

        .catch(err => console.log(err));
  }
  
  function burahinAngNakaraan() {
    errMessage.innerHTML = "";
  }

  sendeMail.addEventListener('click', sendMail);
  emailInput.addEventListener('input', burahinAngNakaraan );



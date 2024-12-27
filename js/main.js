// contact form 

let contactForm = document.getElementById("form2")
contactForm.addEventListener("submit", function (event) {

    let userInput = document.querySelector("[name='name']").value;
    let PhoneInput = document.querySelector("[name='Phone']").value;
    let emailInput = document.querySelector("[name='email']").value;
    let MessageInput = document.querySelector("[name='Message']").value;

    let uservalid = false;
    let Phonevalid = false;
    let emailvalid = false;
    let messagevalid = false;

    // user validation
    if (userInput !== "" && userInput.length <= 15) {
        uservalid = true
    }

    // phon validation
    let phonere = /\(\d{4}\)\s\d{3}-\d{4}/; // (1234) 567-8910
    let valdiationResult_phone = phonere.test(PhoneInput);
    if (valdiationResult_phone === true) {
        Phonevalid = true;
    }

    // email validation 
    let emailre = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // example => example@gamil.com
    let valdiationResult_email = emailre.test(emailInput);
    if (valdiationResult_email === true) {
        emailvalid = true;
    }

    // message validation 
    if (MessageInput !== "" && MessageInput.length >= 15) {
        messagevalid = true
    }

    if (uservalid === false || emailvalid === false || Phonevalid === false || messagevalid === false) {
        event.preventDefault();
    }
})

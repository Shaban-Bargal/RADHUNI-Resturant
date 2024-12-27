let reservation = document.getElementById("form1")
reservation.addEventListener("submit", function (event) {

    let userInput = document.querySelector("[name='name']").value;
    let emailInput = document.querySelector("[name='email']").value;
    let MessageInput = document.querySelector("[name='Message']").value;
    let pepoleInput = document.querySelector("[name='pepole']").value;
    let dateInput = document.querySelector("[name='date']").value;

    let uservalid = false;
    let emailvalid = false;
    let messagevalid = false;
    let pepolevalid = false;
    let datevalid = false;

    // user validation
    if (userInput !== "" && userInput.length <= 15) {
        uservalid = true
        console.log("uservalid")
    }


    // email validation 
    let emailre = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // example => example@gamil.com
    let valdiationResult_email = emailre.test(emailInput);
    if (valdiationResult_email === true) {
        emailvalid = true;
        console.log("emailvalid")
    }

    // message validation 
    if (MessageInput !== "" && MessageInput.length >= 15) {
        messagevalid = true
        console.log("messagevalid")
    }

    // pepole validation
    let pepolere = /^[1-9]\d*$/; //start from 1
    let valdiationResult_pepole = pepolere.test(pepoleInput);
    if (valdiationResult_pepole === true) {
        pepolevalid = true;
        console.log("pepolevalid")
    }
    // date validation
    let datere = /^(0[1-9]|[12]\d|3[01])-(0[1-9]|1[0-2])-\d{4}$/; // DD-MM-YYYY
    let valdiationResult_date = datere.test(dateInput);
    if (valdiationResult_date === true) {
        datevalid = true;
        console.log("datevalid")
    }

    if (uservalid === false || emailvalid === false || pepolevalid === false || messagevalid === false || datevalid === false) {
        event.preventDefault();
    }

})
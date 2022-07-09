//Challenge 1, this is the function block for the first part of the challenge. By clicking the image
//you cand add a red border to the image
    let puppy = document.querySelector("#puppy");
    puppy.addEventListener("click", (e) => {
    if (puppy.style.borderStyle != "solid") {
        puppy.setAttribute("style", "border: solid 2px red");
      } else {
        puppy.style.removeProperty("border");
      }
    })

    //Challenge 2, this code block take the number value of 3 inputs and return a message if all stickers sum less
    //than 10, if there are more than 10 or if the input is not a number
    let calculator = document.querySelector("#sum-stickers");
    calculator.addEventListener("click", (e) => {
    let sticker1 = document.querySelector("#input-1").value;
    let sticker2 = document.querySelector("#input-2").value;
    let sticker3 = document.querySelector("#input-3").value;
    let totalSelection = Number(sticker1) + Number(sticker2) + Number(sticker3);
    if (isNaN(totalSelection)) {
        document.querySelector("#sticker-total").innerHTML = "Ingrese un valor numérico";
    }
    else if (totalSelection >10) {
        document.querySelector("#sticker-total").innerHTML = "Llevas demasiados items";
    } else {
        document.querySelector("#sticker-total").innerHTML = "Llevas" + " " + totalSelection + " " + "items";
    }})

    //Challenge 3, this code block take the value of 3 inputs from selectors, then compare the number and 
    //allows one of two passwords
    let verificate = document.querySelector("#verificator");
    verificate.addEventListener("click", (e) => {
    let digit1 = document.querySelector("#selector1").value;
    let digit2 = document.querySelector("#selector2").value;
    let digit3 = document.querySelector("#selector3").value;
    let VerificationOfImputs = digit1 + digit2 + digit3;
    if (VerificationOfImputs == "911"){
        document.querySelector("#allowed").innerHTML = "Password correcto";
    } else if (VerificationOfImputs == "714") {
        document.querySelector("#allowed").innerHTML = "Password correcto";
    } else {
        document.querySelector("#allowed").innerHTML = "Password incorrecto"; 
    }})
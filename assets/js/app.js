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

    //Challange 2,
    let calculator = document.querySelector("#sum-stickers");
    calculator.addEventListener("click", (e) => {
    let sticker1 = document.querySelector("#input-1").value;
    let sticker2 = document.querySelector("#input-2").value;
    let sticker3 = document.querySelector("#input-3").value;
    let totalSelection = Number(sticker1) + Number(sticker2) + Number(sticker3);
    if (totalSelection >10) {
        document.querySelector("#sticker-total").innerHTML = "Llevas demaciados items"
    } else {
        document.querySelector("#sticker-total").innerHTML = "Llevas" + " " + totalSelection + " " + "items";
    }})
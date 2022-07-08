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
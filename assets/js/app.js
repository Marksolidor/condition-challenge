//Challenge 1, this is the function block for the first part of the challenge. By clicking the image
//you cand add a red border to the image
function myFuncion1() {
    let puppy = document.querySelector(".puppy");
    if (puppy.style.borderStyle != 'solid') {
       puppy.style.border = '2px solid red'
      } else {
        puppy.style.borderStyle = 'none'
      }
}
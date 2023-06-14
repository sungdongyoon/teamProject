/* rent.html */

const umbNumInput = document.querySelector(".rental_umbNum_detail input")
const umbNumCheck = document.querySelector(".umbNum_check");

umbNumCheck.addEventListener("click", () => {
  if(umbNumInput.value.length === 5) {
    location.href = "/html/6.rent_complete.html";
  }
})

/* rent_complete.html */

// const rentalCompleteBtn = document.querySelector(".rental_complete_btn");

// rentalCompleteBtn.addEventListener("click", () => {
//   location.href = ""
// })
/* rent.html */

const umbNumInput = document.querySelector(".rental_umbNum_detail input")
const umbNumCheck = document.querySelector(".umbNum_check");

umbNumCheck.addEventListener("click", () => {
  if(umbNumInput.value.length === 5) {
    location.href = "/html/6.rent_complete.html";
  }
})

/* 우산번호 숫자만 */
function onlyNumber() {
  this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
}

umbNumInput.addEventListener("input", onlyNumber)
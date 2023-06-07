/* 결제 모달창 생성 */
const paymentModal = document.querySelector(".payment_modal");
const cancelBtn = document.querySelector(".cancel");
const buyBtn = document.querySelector(".buy");

const ticketOne = document.querySelector(".one");


ticketOne.addEventListener("click", () => {
  paymentModal.classList.add("active");
})

cancelBtn.addEventListener("click", () => {
  paymentModal.classList.remove("active");
})
buyBtn.addEventListener("click", () => {
  location.href = "/html/4.buy_complete.html";
})
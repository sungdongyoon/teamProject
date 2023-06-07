/* 결제 모달창 생성 */
const paymentModal = document.querySelector(".payment_modal");
const cancelBtn = document.querySelector(".cancel");
const buyBtn = document.querySelector(".buy");

const ticketOne = document.querySelector(".one");
const ticketThree = document.querySelector(".three");
const ticketFive = document.querySelector(".five");

const ticketType = document.querySelector(".buy_modal_type_right");
const ticketPrice = document.querySelector(".buy_modal_price_right");

ticketOne.addEventListener("click", () => {
  paymentModal.classList.add("active");
  /* 세부사항 */
  ticketType.innerText = "1회권";
  ticketPrice.innerText = "8,000원(보증금 7,000원 + 대여료 1,000원)";
})
ticketThree.addEventListener("click", () => {
  paymentModal.classList.add("active");
  /* 세부사항 */
  ticketType.innerText = "3회권";
  ticketPrice.innerText = "20,700원(보증금 18,000원 + 대여료 2,700원)";
})
ticketFive.addEventListener("click", () => {
  paymentModal.classList.add("active");
  /* 세부사항 */
  ticketType.innerText = "5회권";
  ticketPrice.innerText = "29,000원(보증금 25,000원 + 대여료 4,000원)";
})

const ticket = document.querySelectorAll(".member_ticket_buy");

let ticketValue = 1;
for(let i = 0; i < ticket.length; i++) {
  ticketValue += i;
  ticket[i].addEventListener("click", () => {
    ticketType.innerText = `${i}회권`;
  })
}
console.log(ticketValue);


cancelBtn.addEventListener("click", () => {
  paymentModal.classList.remove("active");
})
buyBtn.addEventListener("click", () => {
  location.href = "/html/4.buy_complete.html";
})



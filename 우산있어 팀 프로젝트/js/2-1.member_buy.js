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
  ticketPrice.innerText = "8,000원(보증금 7,000원 + 대여료 1,000원)";
})
ticketThree.addEventListener("click", () => {
  paymentModal.classList.add("active");
  /* 세부사항 */
  ticketPrice.innerText = "20,700원(보증금 18,000원 + 대여료 2,700원)";
})
ticketFive.addEventListener("click", () => {
  paymentModal.classList.add("active");
  /* 세부사항 */
  ticketPrice.innerText = "29,000원(보증금 25,000원 + 대여료 4,000원)";
})

/* 이용권 타입 */
const ticket = document.querySelectorAll(".member_ticket_buy");
const ticketArr = [1, 3, 5];

for(let i = 0; i < ticket.length; i++) {
  ticket[i].addEventListener("click", () => {
    ticketType.innerText = `${ticketArr[i]}회권`;
  })
}

/* 약관동의 */
const agreeAll = document.querySelector(".buy_modal_agreeAll");
const agrees = document.querySelectorAll(".buy_modal_agree input");

const checkAll = (target) => {
  const isChecked = target.checked;

  agrees.forEach((el) => {
    el.checked = isChecked;
  })
}

/* 모달 취소 */
cancelBtn.addEventListener("click", () => {
  paymentModal.classList.remove("active");
})
/* 모달 결제하기 */
buyBtn.addEventListener("click", () => {
  location.href = "/html/4.buy_complete.html";
})



/* 페이지 이동 */
const goHome = document.querySelector(".go_home");
const goRent = document.querySelector(".go_rent");

goHome.addEventListener("click", () => {
  location.href = "/html/1.member.html";
})

goRent.addEventListener("click", () => {
  location.href = "/html/5.rent.html";
})

/* 세부정보 */
const paymentTicket = document.querySelector(".payment_ticket");
const paymentTime = document.querySelector(".payment_time");
const paymentPrice = document.querySelector(".payment_price");
const paymentMethod = document.querySelector(".payment_method");


/* 이용권 */
const ticketInfo = window.localStorage.getItem('ticket');
const ticketObj = JSON.parse(ticketInfo);

paymentTicket.innerHTML = `${ticketObj.type}`;


/* 결제일자 */
const today = new Date();

let year = today.getFullYear();
let month = today.getMonth() + 1;
let date = today.getDate();
let hours = today.getHours();
let minutes = today.getMinutes();

paymentTime.innerHTML = `${year}.${String(month).padStart(2, "0")}.${String(date).padStart(2, "0")} ${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;

/* 결제금액 */
paymentPrice.innerHTML = `${ticketObj.price}원`

/* 결제수단 */
paymentMethod.innerHTML = `${ticketObj.method}`;
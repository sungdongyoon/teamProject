/* 페이지 이동 */
const goHome = document.querySelector(".go_home");
const goRent = document.querySelector(".go_rent");

goHome.addEventListener("click", () => {
  location.href = "/1.member.html";
})

goRent.addEventListener("click", () => {
  location.href = "/html/5.rent.html";
})

/* 세부정보 */
const paymentTicket = document.querySelector(".payment_ticket");
const paymentTime = document.querySelector(".payment_time");
const paymentPrice = document.querySelector(".payment_price");
const paymentMethod = document.querySelector(".payment_method");

paymentTicket.innerText = "1회";

const date = new Date();
paymentTime.innerHTML = `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, "0")}.${String(date.getDate()).padStart(2, "0")} ${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`;


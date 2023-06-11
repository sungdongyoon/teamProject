const toggleBtn = document.querySelector(".toggleBtn");
const mobileGnbContent = document.querySelector(".Mobile_gnb_content");
const gnbContent = document.querySelector(".gnb-content");

toggleBtn.addEventListener("click", (e) => {
  e.preventDefault();
  toggleBtn.classList.toggle("active");
  mobileGnbContent.classList.toggle("active");
  // gnbContent.classList.toggle("active");
})

const prevBtn = document.querySelectorAll(".prev_btn");
const logo = document.querySelectorAll(".logo");

logo.forEach((el) => {
  el.addEventListener("click", () => {
    location.href = "/1.member.html";
  })
})

prevBtn.forEach((el) => {
  el.addEventListener("click", () => {
    history.go(-1);
  })
})
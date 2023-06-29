/* PC Main Page navigation Background */ 
const navGnb = document.querySelector(".main_gnb");
const logs = document.querySelector(".main_gnb > .logo a");
const navGnbHeight = navGnb.getBoundingClientRect().height;
const imgLogo = document.querySelector(".main_gnb > .logo a > img");




document.addEventListener("scroll", ()=> {
  if(window.scrollY > navGnbHeight) {
    logs.classList.add("on")
    navGnb.classList.add("on");
    gnbContent.classList.add("on");
    imgLogo.src = "/Logo/SVGFile/iconLogo01.svg"
  } else {
    logs.classList.remove("on")
    navGnb.classList.remove("on");
    gnbContent.classList.remove("on");
    imgLogo.src = "/Logo/SVGFile/iconLogoWhite.svg"
  }
})

/* === Mobile Toggle === */
const toggleBtn = document.querySelector(".toggleBtn");
const mobileGnbContent = document.querySelector(".Mobile_gnb_content");
const gnbContent = document.querySelector(".gnb-content");

toggleBtn.addEventListener("click", (e) => {
  e.preventDefault();
  toggleBtn.classList.toggle("active");
  mobileGnbContent.classList.toggle("active");
})

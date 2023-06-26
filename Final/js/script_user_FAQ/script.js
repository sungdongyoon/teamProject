
// include
$(function() {
  /* Navigation & Footer */ 
    $('.main_gnb').load('/include/navigation.html');
    $('.footer').load('/include/footer.html');
  })


//*FAQ 페이지 아코디언 메뉴
const accodion = document.querySelectorAll(".q-menu");
const accodionItem = document.querySelectorAll(".a-menu");

accodion.forEach(function(el) {
  el.addEventListener("click", toggleAccordian);
})

function toggleAccordian(el) {
  let targetAccodion = el.currentTarget;
  let targetText = el.currentTarget.nextElementSibling.classList;

  if(targetText.contains("show")) {
    targetText.remove("show");
  } else {
    accodion.forEach((el) => {
      accodionItem.forEach((el) => {
        el.classList.remove("show");
      }) 
      el.classList.remove("show");
    })
    targetAccodion.classList.add("show");
    targetText.add("show");
  }

}

//*FAQ 페이지 모달
const btn = document.querySelector(".contact-modal_button");
const modal = document.getElementById('modalWrap');
const closeBtn = document.getElementById('closeBtn');

btn.onclick = function() {
  modal.classList.toggle("show");
}

closeBtn.onclick = function() {
  modal.classList.toggle("show")
}

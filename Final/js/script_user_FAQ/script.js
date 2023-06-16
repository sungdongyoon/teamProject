
// include
$(function() {
  /* Navigation & Footer */ 
    $('.main_gnb').load('/include/navigation.html');
    $('.footer').load('/include/footer.html');
  })


//*FAQ 페이지 아코디언 메뉴
let acc = document.getElementsByClassName("q-menu");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
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

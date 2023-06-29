//*FAQ 페이지 아코디언 메뉴

function acc(el) {
  let before = document.getElementsByClassName("show")[0]
  if(before && document.getElementsByClassName("show")[0] != el) {
    before.nextElementSibling.style.maxHeight = null;
    before.classList.remove("show")
  }
  el.classList.toggle("show")
  let content = el.nextElementSibling;
  if(content.style.maxHeight !=0) {
    content.style.maxHeight = null;
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
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

//*FAQ 페이지 모달 제출 완료 알림창

$(".faq-modal-main_button").click(function() {
  Swal.fire({
    icon: 'success',
    title: 'Success!',
    text: '제출이 완료되었습니다✔',
  });
})

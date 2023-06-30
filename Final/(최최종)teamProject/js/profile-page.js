// include
$(function() {
/* Navigation & Footer */ 
  $('.main_gnb').load('/include/navigation.html');
  $('.footer').load('/include/footer.html');
})

//** Profile Page Modal
const profileModal = document.querySelector(".ticket-remain_detail");
const closeModalBtn = document.querySelector(".fa-circle-xmark");

profileModal.addEventListener("click", () => {
  document.querySelector(".modal-history").classList.add("show");
})
closeModalBtn.addEventListener("click", ()=> {
  document.querySelector(".modal-history").classList.remove("show");
})

document.querySelector(".iframe_modals").addEventListener("click", () => {
  document.querySelector(".modal-history").classList.remove("show");
})
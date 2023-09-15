const modalOpen = document.querySelector(".modal-open");
const modal = document.querySelector(".modal-outer");
const modalClose = document.querySelector(".modal-close");

modalOpen.onclick = function () {
  modal.classList.remove("hidden");
};

modalClose.onclick = function () {
  modal.classList.add("hidden");
};

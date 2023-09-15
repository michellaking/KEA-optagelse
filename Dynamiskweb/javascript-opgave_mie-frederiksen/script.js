const buttons = document.querySelectorAll(".tab-btn");
const destinations = document.querySelectorAll(".tab-dest>li");

buttons.forEach(function (element, index) {
  element.onclick = function () {
    destinations.forEach(function (element) {
      element.classList.remove("active");
    });

    destinations[index].classList.add("active");
  };
});

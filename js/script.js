let squarebox = document.querySelector("#bar-box");
let bar = document.getElementById("bars").classList;
let menuBox = document.querySelector(".menu-box");
let btn_status = 0;
squarebox.addEventListener("click", () => {
  if (btn_status == 0) {
    bar.remove("fa-bars");
    bar.add("fa-x");
    btn_status = 1;
    menuBox.classList.toggle("active");
  } else if (btn_status == 1) {
    bar.remove("fa-x");
    bar.add("fa-bars");
    btn_status = 0;
    menuBox.classList.toggle("active");
  }
});

function up1() {
  document.getElementById("toTop").innerHTML = `<a href="#" class="to-top">
  <p>Up</p>
</a>`;
}

up1()


const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 200) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})





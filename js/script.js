const cartAdd = document.querySelector(".button_addtToCart");
const conf = document.querySelector(".confirm");
// const reset = document.querySelector(".button_reset");

function dontGo(event) {
  event.preventDefault();
}

cartAdd.addEventListener("click", dontGo);
cartAdd.addEventListener("click", added);

function added() {
  conf.innerHTML = `<h3>Item added</h3> <div class="button button_reset"><a href="product1.html">Add another</a><div>`;
}

// function resett() {
//   conf.innerHTML = "";
// }
// reset.onclick.addEventListener(resett);

// function myFunction() {
//   var x = document.querySelector(".confirmation");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }
function remove(el) {
  var element = el;
  element.remove();
}

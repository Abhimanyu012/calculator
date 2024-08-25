let buttons = document.querySelector(".btn-AC");
let acToggler = 0;
buttons.addEventListener("click", function myfunction() {
  if (acToggler == 0) {
    buttons.style.color = "red";
    acToggler = 1;
  } else if (acToggler == 1) {
    buttons.style.color = "yellow";
    acToggler = 2;
  } else {
    buttons.style.color = "black";
    acToggler = 0;
  }
});
buttons.addEventListener("dblclick", function previous(){
    // PreviousDisplay.textContent = previousValue .innertext;
    alert("heeeeeeeeee")
 } )
 

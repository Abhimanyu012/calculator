const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let clear = " ";

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const buttonValue = button.textContent;
    display.value += buttonValue;
  });
});

//all clearbutton
const AllClear = document.querySelector(".btn-AC");
AllClear.addEventListener("click", allClear);

function allClear() {
  display.value = clear;
  console.log(":he");
}

///evaluation

const Evaluation = document.querySelector(".btn-EQL");

Evaluation.addEventListener("click", equal);
function equal() {
  display.value = eval(display.value);
 
}

document.addEventListener("keydown", function (event) {
  const key = event.key;

  if ("123456789/*-+.".includes(key)) {
    display.value += key;
  } else if (key === "Enter") {
    try {
      display.value = eval(display.value);
    } catch {
      display.value = "Error";
    }
  } else if (key === "Backspace") {
    display.value = display.value.slice(0, -1); // Display ke last character ko remove karna
  }

  // Agar pressed key Escape hai (display ko clear karne ke liye)
  else if (key === "Escape") {
    
    
    display.value = ""; // Display ko clear karna
   
  }
});

const PreviousDisplay = doucument.querySelector(".previous");
const previousValue = display.value;
 AllClear.addEventListener("Doubleclick", function previous(){
   PreviousDisplay.textContent = previousValue .innertext;
} )




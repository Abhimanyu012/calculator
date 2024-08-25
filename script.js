const display = document.getElementById("display");
const display2 = document.getElementById("display2");
const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
  if ("123456789/*-+.".includes(button.textContent)) {
    button.addEventListener("click", function () {
      const buttonValue = button.textContent;
      display.innerHTML += buttonValue;
    });
  }
});

//all clearbutton
const AllClear = document.querySelector(".btn-AC");
AllClear.addEventListener("click", allClear);

function allClear() {
  display.innerHTML = "";
  display2.innerHTML = "";
}

///evaluation

const Evaluation = document.querySelector(".btn-EQL");

Evaluation.addEventListener("click", equal);
function equal() {
  if (display.innerHTML === display2.innerHTML) {
    display.innerHTML = "";
  } else if (display.innerHTML === "") {
    exit();
  } else {
    display2.innerHTML = display.innerHTML;
    display.innerHTML = eval(display.innerHTML);
  }
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


AllClear.addEventListener("Doubleclick", function previous(){
   PreviousDisplay.textContent = previousValue .innertext;
} )




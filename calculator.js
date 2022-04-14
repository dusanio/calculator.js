function calculator() {
  display.innerText = "0";
  let buttons = document.querySelectorAll("button");
  for (let i = 0; i < buttons.length; ++i) {
    buttons[i].addEventListener("click", () =>
      buttonPressed(buttons[i].innerText)
    );
  }
}

function buttonPressed(b) {
  switch (b) {
    case "=":
      try {
        if (eval(display.innerText == "/")) {
          display.innerText = "Invalid input";
        }
        display.innerText = eval(display.innerText);
      } catch {
        display.innerText = "Invalid Input";
      }
      break;
    case "←":
      if (isNaN(display.innerText) == true) {
        display.innerText = "0";
      } else if (display.innerText == "0") {
        break;
      } else {
        display.innerText = display.innerText.substring(0, -1);
      }
      break;
    case "AC":
      display.innerText = "0";
      break;
    default:
      if (display.innerText == "0") display.innerText = "";
      console.log("Pressed button " + b);
      display.innerText += b;
  }
}

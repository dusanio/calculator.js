let display = document.querySelector("#display");
let numbers = Array.from(document.querySelectorAll("button"));

numbers.map((button) => {
  button.addEventListener("click", (event) => {
    switch (event.target.innerText) {
      case "AC":
        display.innerText = "";
        break;
      case "←":
        if (display.innerText) {
          display.innerText = display.innerText.slice(0, -1);
        }
        break;
      case "=":
        try {
          display.innerText = eval(display.innerText);
        } catch {
          display.innerText = "Invalid input, try again";
          return;
        }
        break;
      default:
        display.innerText += event.target.innerText;
    }
  });
});

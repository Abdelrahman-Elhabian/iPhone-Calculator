let op = document.querySelector(".operation");
let result = document.querySelector(".result");
let delAll = document.querySelector(".delAll");

delAll.addEventListener("click", (e) => {
  op.innerHTML = "";
  result.innerHTML = "";
  document.querySelector(".operation").classList.add("big");
});

let appendToDisplay = (value) => {
  if (value === "*") {
    op.innerHTML += "×";
  } else if (value === "/") {
    op.innerHTML += "÷";
  } else {
    op.innerHTML += value;
  }
};

let calc = () => {
  let expression = op.innerHTML.replace(/×/g, "*").replace(/÷/g, "/");
  try {
    if (document.querySelector(".operation").classList.contains("big"))
      document.querySelector(".operation").classList.remove("big");
    let res = eval(expression);
    result.innerHTML = Number(res).toLocaleString();
  } catch (error) {
    result.innerHTML = "Error";
  }
};

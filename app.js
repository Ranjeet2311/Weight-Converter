const lbsInput = document.querySelector("#lbsInput");
const poundsOutput = document.querySelector("#poundsOutput");
const gmOutput = document.querySelector("#gmOutput");
const ozOutput = document.querySelector("#ozOutput");
const mgOutput = document.querySelector("#mgOutput");
const output = document.querySelector(".output");

output.style.visibility = "Hidden";

lbsInput.addEventListener("input", (e) => {
  output.style.visibility = "visible";
  let kg = e.target.value;
  poundsOutput.innerHTML = kg * 2.2046;
  gmOutput.innerHTML = kg / 0.001;
  ozOutput.innerHTML = kg * 35.274;
  mgOutput.innerHTML = kg * 1000000;

  if (kg <= 0) {
    output.style.visibility = "Hidden";
  }
});

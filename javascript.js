let color = document.querySelectorAll(".color");
let colorcode = "0123456789abcdef";
let code = "";

color.forEach((element) => {
  let y = "";
  for (let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * 16);

    y += colorcode[random];
  }
  console.log("#" + y);
  let bg = "#" + y;
  element.innerHTML = bg;
  element.style.backgroundColor = bg;
});
function myfunction(event) {
  let text = event.target.innerHTML;

  navigator.clipboard.writeText(text);
  let div = document.createElement("div");
  div.classList.add("popup");
  div.innerHTML += "copied to clipboard";
  document.body.appendChild(div);
  setTimeout(() => {
    div.remove();
  }, 2000);
}
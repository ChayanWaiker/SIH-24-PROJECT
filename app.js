let wheel = document.querySelector('.wheel');
let spinBtn = document.querySelector('.spinBtn');
let value = Math.ceil(Math.random() * 3600);
let link= document.querySelector("#num1");

spinBtn.onclick = function() {
  wheel.style.transform = "rotate(" + value + "deg)";
  value += Math.ceil(Math.random() * 3600);
 
setTimeout(() => {window.location.href="./games1.html";},5000);
}


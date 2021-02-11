document.addEventListener("DOMContentLoaded", start)

function start() {
	console.log("DOM loaded");
	document.querySelector(".spin").addEventListener("click", startSpin);
}

function startSpin() {
	let x = 1024;
	let y = 9999;

	let deg = Math.floor(Math.random() * (x - y)) + y;

	document.getElementById("box").style.transform = "rotate(" + deg + "deg)";

	let element = document.getElementById("mainbox");
}

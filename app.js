document.body.addEventListener('keydown', downKey)
document.body.addEventListener('keyup', upKey)

function downKey(e) {
	console.log(e);
	// console.log(e.key);
	var id = e.key;
	var element = document.getElementById(id);
	// console.log(element)
	element.classList.add('active');
}

function upKey(e) {
	console.log("upKey")
	console.log(e)
	var id = e.key;
	var element = document.getElementById(id);
	element.classList.remove('active');
}
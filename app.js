document.body.addEventListener('keydown', downKey)
document.body.addEventListener('keyup', upKey)

function downKey(e) {
	//console.log(e);
	// console.log(e.key);
	var id;
	if (e.key === "Shift") {
		console.log("sbigigh")
		id = e.code;
		//e.key = e.code;
	}
	else{
		id = e.key;
	}
	var element = document.getElementById(id);
	// console.log(element)
	element.classList.add('active');
	document.getElementById('hello').play();
}

function upKey(e) {
	//console.log("upKey")
	//console.log(e)
	var id;
	if (e.key === "Shift") {
		console.log("sbigigh")
		id = e.code;
	}
	else{
		id = e.key;
	}
	var element = document.getElementById(id);
	element.classList.remove('active');
	document.getElementById('hello').pause();
}

function clearTA() {
	document.getElementById('ta').value = '';
}

function lights() {
	var element = document.getElementsByTagName('span');
	//console.log(element)
	for (var i = 0; i < element.length; i++){
		element[i].classList.add('active');
		}
}

function lightsTwo() {
	var element = document.getElementsByTagName('span');
	//console.log(element)
	for (var i = 0; i < element.length; i++){
		element[i].classList.remove('active');
		}
}
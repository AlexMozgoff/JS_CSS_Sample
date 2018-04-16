var pass = document.getElementById('pass');
var cond1 = document.getElementById('cond1');
var cond2 = document.getElementById('cond2');
var cond3 = document.getElementById('cond3');
var cond4 = document.getElementById('cond4');
var cond5 = document.getElementById('cond5');

console.log("asdf");
var ENG = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N','O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var eng = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var symbols = ['!', '?', '.', '<', '>', '(', ')', '*'];
var bool = false;

pass.onkeyup = function() {
	checkCondition1();
	checkCondition2();
	checkCondition3();
	checkCondition4();
	checkCondition5();	
	
	if (pass.value == "") {
		cond1.style.color = "#5181B8";
		cond1.innerHTML = "* Латинские прописные символы";
		cond2.style.color = "#5181B8";
		cond2.innerHTML = "* Латинские строчные символы";
		cond3.style.color = "#5181B8";
		cond3.innerHTML = "* Цифровые символы";
		cond4.style.color = "#5181B8";
		cond4.innerHTML = "* Специальные символы(!$<> и т.д.)";
		cond5.style.color = "#5181B8";
		cond5.innerHTML = "* Длина пароля должна быть больше 8 символов";
	}
}

function checkCondition1(){
	for	(var i = 0; i < pass.value.length; i++){
		for (var j = 0; j < ENG.length; j++){
			if (pass.value[i] == ENG[j]){
				bool = true;
			}
		}
	} 
	if (bool == false){
		cond1.style.color = "red";
		cond1.innerHTML = "X ‹атинские прописные символы";
	}
		else {
		cond1.style.color = "#46A95B";
		cond1.innerHTML = "V Латинские прописные символы";
	}
		
	bool = false;
}

function checkCondition2(){
	for	(var i = 0; i < pass.value.length; i++){
		for (var j = 0; j < eng.length; j++){
			if (pass.value[i] == eng[j]){
				bool = true;
			}
		}
	}
	if (bool == false){
		cond2.style.color = "red";
		cond2.innerHTML = "X Латинские строчные символы";
	} 
	else {
		cond2.style.color = "#46A95B";
		cond2.innerHTML = "V Латинские строчные символы";
	}
	bool = false; 
}

function checkCondition3(){
	for	(var i = 0; i < pass.value.length; i++){
		for (var j = 0; j < digits.length; j++){
			if (pass.value[i] == digits[j]){
				bool = true;
			}
		}
	}
	if (bool == false){
		cond3.style.color = "red";
		cond3.innerHTML = "X Цифровые символы";
	} 
	else {
		cond3.style.color = "#46A95B";
		cond3.innerHTML = "V Цифровые символы";
	}
	bool = false;
}

function checkCondition4(){
		for	(var i = 0; i < pass.value.length; i++){
		for (var j = 0; j < symbols.length; j++){
			if (pass.value[i] == symbols[j]){
				bool = true;
			}
		}
	}
	if (bool == false){
		cond4.style.color = "red";
		cond4.innerHTML = "Х Специальные символы(!$<> и т.д.)";
	}
	else{
		cond4.style.color = "#46A95B";
		cond4.innerHTML = "V Специальные символы(!$<> и т.д.)";
	}
	bool = false;
}

function checkCondition5(){
	if (pass.value.length < 9){
		cond5.style.color = "red";
		cond5.innerHTML = "X Длина пароля должна быть больше 8 символов";
	}
	else {
		cond5.style.color = "#46A95B";
		cond5.innerHTML = "V Длина пароля должна быть больше 8 символов";
	}
}





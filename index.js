const check = document.getElementsByClassName("check");
const relleno = document.querySelector("#relleno");
const more = document.querySelector("#more");
const lis = document.querySelector(".container-homeworks");

var barra = 0;
var pun = 0;
var chs = [];

more.onclick = function(){
	let home = document.createElement("DIV");
	home.classList.add("homework");
	let ch = document.createElement("DIV");
	ch.classList.add("check");
	let text = document.createElement("SPAN");
	text.classList.add("text");
	text.innerText = prompt("homework");
	home.appendChild(ch);
	home.appendChild(text);
	chs.push(home);
	for(d of chs){
		d.onclick = function(){
			this.children[0].classList.toggle("active");
			up();
		}
		lis.appendChild(d);
		pun = 100 / chs.length;
	}
}

// chs.forEach(item => {
// 	item.onclick = function(){
// 		item.classList.toggle("active");
// 		up();
// 	}
// })

function up(){
	barra = 0;
	for(i of check){
		if(i.classList.contains("active")){
			barra += pun;
		}
	}
	relleno.style=`width: ${barra}%`;
}


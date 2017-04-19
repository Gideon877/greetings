/*
Coder	: Thabang Gideon Magaola
About	: This is a web page that allows you to enter a name and when a button is pressed display a greeting
				* keep track of how many times people were greeted
				* greet people in more than one language
*/
var greeting = document.getElementById('display');
var name1 = document.getElementById('user_input');

var namesGreeted = {}; //this variable will store all the new names.

//This 'for loop'
for (var i=0; i<namesGreeted.length; i++){
}


function showInput(){

	if (name1.value.length > 0 && namesGreeted[name1.value.toLowerCase()] === undefined){

		namesGreeted[name1.value.toLowerCase()] = 1;

		if (document.getElementById('english').checked) {
	    	greeting.innerHTML = "Hello, " + name1.value.toLowerCase() + ".";
			name1.value = "";
	       	var container  = clickCounter();

			} else if (document.getElementById('setswana').checked) {
	  		greeting.innerHTML = "Dumela, " + name1.value.toLowerCase() + ".";
			name1.value = "";
	       	var container  = clickCounter();

			} else if (document.getElementById('zulu').checked) {
			greeting.innerHTML = "Sawubona, " + name1.value.toLowerCase() + ".";
	       	name1.value = "";
         	var container  = clickCounter();
			}
		}

	else if (name1.value.length > 0 && namesGreeted[name1.value.toLowerCase()] !== undefined){
		if (document.getElementById('english').checked) {
			greeting.innerHTML = "Hello " + name1.value.toLowerCase() + ", welcome back.";
			name1.value = "";

		} else if (document.getElementById('setswana').checked) {
			greeting.innerHTML = "Dumela " + name1.value.toLowerCase() + ", rea ho amohela.";
			name1.value = "";

		} else if (document.getElementById('zulu').checked) {
			greeting.innerHTML = "Sawubona " + name1.value.toLowerCase() + ", siyakwamukela.";
			name1.value = "";
		}
	}
};

function clickCounter() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount)+1;
        } else {
            localStorage.clickcount = 1;
        }
        document.getElementById("result").innerHTML = "Names greeted for this session: " + localStorage.clickcount;
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }
}

var x = document.getElementById("myBtn");
x.addEventListener("click", resetClear);

function resetClear(){
	console.log(localStorage.clickcount);
//	alert ("Greetings counter deleted!");
	if (localStorage.clickcount >= 1) {
		localStorage.clickcount = 0;
	}
	document.getElementById("result").innerHTML = "Names greeted for this session: " + localStorage.clickcount;
		return localStorage.clickcount;
}

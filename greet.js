/*
Coder	: Thabang Gideon Magaola
About	: This is a web page that allows you to enter a name and when a button is pressed display a greeting
				* keep track of how many times people were greeted
				* greet people in more than one language

*/
var greeting = document.getElementById('display');
var name1 = document.getElementById('user_input');

var namesGreeted = {};

for (var i=0; i<namesGreeted.length; i++){
}


function showInput(){

	if (name1.value.length > 0 && namesGreeted[name1.value] === undefined){

		namesGreeted[name1.value] = 1;

		if (document.getElementById('english').checked) {
	    greeting.innerHTML =
	                   "Hello, " + name1.value + ".";
	                   name1.value = "";
	        var container  = clickCounter();

			} else if (document.getElementById('setswana').checked) {
	  		greeting.innerHTML =
	                     "Dumela, " + name1.value + ".";
	                     name1.value = "";
	          var container  = clickCounter();

			} else if (document.getElementById('zulu').checked) {
				greeting.innerHTML =
	                   "Sawubona, " + name1.value + ".";
	                   name1.value = "";
	          var container  = clickCounter();
			}
		}
	
		else if (name1.value.length > 0 && namesGreeted[name1.value] !== undefined){
			if (document.getElementById('english').checked) {
				greeting.innerHTML =
											 "Hello " + name1.value + ", welcome back.";
											 name1.value = "";

				} else if (document.getElementById('setswana').checked) {
					greeting.innerHTML =
												 "Dumela " + name1.value + ", welcome back.";
												 name1.value = "";

				} else if (document.getElementById('zulu').checked) {
					greeting.innerHTML =
											 "Sawubona " + name1.value + ", welcome back.";
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
        document.getElementById("result").innerHTML = "You have been greeted " + localStorage.clickcount + " time(s) in this session.";
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }
}

var x = document.getElementById("myBtn");
x.addEventListener("click", resetClear);

function resetClear(){
	//alert ("Greetings counter deleted!");
	localStorage.clickcount = 0;

}


/*
if (namesGreeted[name1] === undefined){
	var clickCounter++;
}
*/

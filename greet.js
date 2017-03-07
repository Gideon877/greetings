var greeting = document.getElementById('display');
var name1 = document.getElementById('user_input');


function showInput(){
	if (name1.value.length > 0 || name1.value === null){

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
		else{
			greeting.innerHTML = "Please enter your name";
		}
};

function clickCounter() {
    if(typeof(Storage) !== "undefined") {
        if (sessionStorage.clickcount) {
            sessionStorage.clickcount = Number(sessionStorage.clickcount)+1;
        } else {
            sessionStorage.clickcount = 1;
        }
        document.getElementById("result").innerHTML = "You have been greeted " + sessionStorage.clickcount + " time(s) in this session.";
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }
}

var x = document.getElementById("myBtn");
x.addEventListener("click", resetClear);

function resetClear(){
	alert ("Greetings counter deleted!");
	sessionStorage.clickcount = 0;

}

var namesGreeted = {};
/*
if (namesGreeted[name1] === undefined){
	var clickCounter++;
}
*/

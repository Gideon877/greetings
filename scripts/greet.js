/*var count = document.querySelector('#counter');
var clicks = 0;
*/
document.getElementById("display").innerHTML = "Greeting message will show here."

function showInput(){

	if (document.getElementById('english').checked) {
    document.getElementById('display').innerHTML =
                   "Hello, " + document.getElementById("user_input").value + ".";
                   document.getElementById("user_input").value = "";
        var container  = clickCounter();

		} else if (document.getElementById('setswana').checked) {
  		document.getElementById('display').innerHTML =
                     "Dumela, " + document.getElementById("user_input").value + ".";
                     document.getElementById("user_input").value = "";
          var container  = clickCounter();

		} else if (document.getElementById('afrikaans').checked) {
		document.getElementById('display').innerHTML =
                   "Hallo, " + document.getElementById("user_input").value + ".";
                   document.getElementById("user_input").value = "";
          var container  = clickCounter();

		}
};
function clickCounter() {
    if(typeof(Storage) !== "undefined") {
        if (sessionStorage.clickcount) {
            sessionStorage.clickcount = Number(sessionStorage.clickcount)+1;
        } else {
            sessionStorage.clickcount = 1;
        }
        document.getElementById("result").innerHTML = "Name(s) greeted for this session is " + sessionStorage.clickcount + ".";
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }
}
/*
Coder	: Thabang Gideon Magaola
About	: This is a web page that allows you to enter a name and when a button is pressed display a greeting
				* keep track of how many times people were greeted
				* greet people in more than one language
*/

var user_name = document.getElementById('user_input'); //Get user input
var greetingDisplay = document.getElementById('display');
var countDisiplay = document.getElementById("result");

//Get radio button value of languages

var english = document.getElementById('english');
var setswana = document.getElementById('setswana');
var zulu = document.getElementById('zulu');
var namesGreeted = {};

function showInput() {
    if (user_name && namesGreeted[user_name.value.toLowerCase()] !== undefined) {
        languageCheck(); //Check which language the user have selected and greet with it.
    }
    else if (user_name && namesGreeted[user_name.value.toLowerCase()] === undefined) {
        namesGreeted[user_name.value.toLowerCase()] = 1;
        languageCheck(); //Check which language the user have selected and greet with it.
        clickCounter(); //Count names greeted
    }
}

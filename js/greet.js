/*
Author	: Thabang Gideon Magaola
About	: This is a web page that allows you to enter/input a name, and when a button is pressed it display a greeting message based on the language selected
			* keep track of how many times people were greeted
			* greet people in more than one language
			* save greeted names on a browser storage
*/

[greeting, userInput, counterMessage, namesGreeted, selectedLanguage, warn] = 
[document.getElementById('display'), document.getElementById('user_input'), document.getElementById("result"), {},
 document.getElementById('dropdown'), document.getElementById('warningHeader')]


function showInput(){
	let userName = userInput.value.toLowerCase();
	var language = selectedLanguage.options[selectedLanguage.selectedIndex].value;
	
	(!userName) ? getWarning() : clearWarn()

	function getGreetMessage(input) {
		return input.language === language;
	}

	let obj = languages.find(getGreetMessage);

	greetSomeone(userName, obj)


};


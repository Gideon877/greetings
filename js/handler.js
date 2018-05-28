function getWarning() {
	[warn.innerHTML, warn.style.color] = ['Please enter name to be greeted!', 'red']
}

function clearWarn() {
    warn.style.color = '';
    counterMessage.style.color = ''
}

function greetSomeone(userName, obj) {
	if (userName && namesGreeted[userName] === undefined){
		namesGreeted[userName] = 1, //Assign a value 1 for a newly greeted name to be stored as a map.
		greeting.innerHTML = obj.greetMessage + userName + '.', //Display greet message to a user. 
		clickCounter(); //Keep count on how many new names have been greeted.
	}

	if (userInput.value && namesGreeted[userName]){
		greeting.innerHTML = obj.greetMessage + userName + '. ' + obj.greetedMessage; //Display greet message to a user
	}
	userInput.value = ""; //clear input textbox for a user to enter a new name.
}

$("#user_input").keyup(function(e) {
    var regex = /^[a-zA-Z]+$/;
    (regex.test(this.value) !== true) ? this.value = this.value.replace(/[^a-zA-Z]+/, '') : this.value
});

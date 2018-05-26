function getWarning() {
	[warn.innerHTML, warn.style.color] = ['Please enter name to be greeted!', 'red']
}

function clearWarn() {
    warn.style.color = '';
    counterMessage.style.color = ''
}

function greetSomeone(userName, obj) {
	if (userInput.value && namesGreeted[userName] === undefined){
		namesGreeted[userName] = 1, 
		greeting.innerHTML = obj.greetMessage + userName + '.',
		userInput.value = "";
		clickCounter(); 
	}

	if (userInput.value && namesGreeted[userName]){
		greeting.innerHTML = obj.greetMessage + userName + '. ' + obj.greetedMessage;
		userInput.value = "";
	}
}

$("#user_input").keyup(function(e) {
    var regex = /^[a-zA-Z]+$/;
    (regex.test(this.value) !== true) ? this.value = this.value.replace(/[^a-zA-Z]+/, '') : this.value
});
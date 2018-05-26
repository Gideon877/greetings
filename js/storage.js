function clickCounter() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount)+1;
        } else {
            localStorage.clickcount = 1;
        }
        counterMessage.innerHTML = "Names greeted for this session: " + localStorage.clickcount;
    } else {
        counterMessage.innerHTML = "Sorry, your browser does not support web storage...";
    }
}

function resetClear(){
	if (localStorage.clickcount >= 1) {
		localStorage.clickcount = 0;
		namesGreeted = {};
	}
    counterMessage.innerHTML = "Names greeted cleared.";
    counterMessage.style.color = 'red'
    greeting.innerHTML = ''
	return localStorage.clickcount;
}
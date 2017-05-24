function resetClear(){
	//check if the localStorage is not cleared yet
	if (localStorage.clickcount >= 1) {
		localStorage.clickcount = 0;
	}
	document.getElementById("result").innerHTML = "Names greeted for this session: " + localStorage.clickcount;
		return localStorage.clickcount;
}

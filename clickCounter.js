function clickCounter() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount)+1;
        } else {
            localStorage.clickcount = 1;
        }
        // return "Names greeted for this session: " + localStorage.clickcount;
        countDisiplay.innerHTML = "Names greeted for this session: " + localStorage.clickcount;
    } else {
        // return "Sorry, your browser does not support web storage...";
        countDisiplay.innerHTML = "Sorry, your browser does not support web storage...";
    }
}

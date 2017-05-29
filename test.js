// Function test file

var namesGreeted = {}; //empty name array to store

function newlyAdded(name) {
    if (namesGreeted[name] === undefined) {
        namesGreeted[name] = 1;
    }
}

function greetFun(name, lang) {

    if (lang == 'English') {
        return 'Hello, ' + name;
    } else if (lang == 'Setswana') {
        return 'Dumela, ' + name;

    } else if (lang == 'Zulu') {
        return 'Sawubona, ' + name;

    }
}

function resetCounter() {
    //check if the localStorage is not cleared yet
    if (localStorage.clickcount >= 1) {
        localStorage.clickcount = 0;
    }
    return localStorage.clickcount;
}

function clickCounter() {
    if (typeof(Storage) !== "undefined") {
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount) + 1;
        } else {
            localStorage.clickcount = 1;
        }
        return "Names greeted for this session: " + localStorage.clickcount;

    } else {
        return "Sorry, your browser does not support web storage...";

    }
}

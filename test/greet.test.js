describe('The languageCheck function', function() {

    it('should greet Jen correctly in English', function() {
        if (english) {
            assert.equal('Hello, Jen', languageCheck());

        }
    });
    it('should greet Sibongile correctly in Zulu', function() {
        if (zulu) {
            assert.equal('Sawubona, Sibongile', languageCheck());

        }
    });
    it('should greet Lerato correctly in Setswana', function() {
        if (setswana) {
            assert.equal('Dumela, Lerato', languageCheck());

        }
    });
});

describe('The clickCounter function', function() {

    it('should count names greeted whenever a new name is entered.', function() {
        if(typeof(Storage) !== "undefined") {
            if (localStorage.clickcount) {
                localStorage.clickcount = Number(localStorage.clickcount)+1;
            } else {
                localStorage.clickcount = 1;
            }
            assert.equal("Names greeted for this session: 2", clickCounter());
        } else {
            assert.equal("Sorry, your browser does not support web storage...", clickCounter());
        }

    })
});

describe('The resetCounter function', function() {

    it('should clear the local storage and reset it to 0.', function() {
        if (localStorage.clickcount >= 1) {
            localStorage.clickcount = 0;
            assert.equal(0, resetCounter());
        } else {
            assert.equal("", resetCounter());
        }

    })
});

describe('The greet function', function() {

    it('should greet Jen correctly in English', function() {
        if (english) {
            assert.equal('Hello, Jen', languageCheck());

        }
    });

    it('should update the counter for a new Name'),
        function(user_name) {
            assert.equal(user_name === null)
            if (namesGreeted[user_name] === undefined) {
                namesGreeted[user_name] = 1;

                if (localStorage.clickcount) {
                    localStorage.clickcount = Number(localStorage.clickcount) + 1;
                } else {
                    localStorage.clickcount = 1;
                }

            }

        }
});

describe('The reset counter function', function() {

    it('should reset greeting counter to 0', function() {

        assert.equal(undefined)
        if (localStorage.clickcount >= 1) {
            localStorage.clickcount = 0;
        }
    });
});

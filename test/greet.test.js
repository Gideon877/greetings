describe('The greet function', function() {
    it('should greet Thabang correctly in English', function() {
        //Asemble

        var user_name = document.getElementById('user_input'); //Get user input
        var language = document.getElementById('zulu');
        // var setswana = document.getElementById('setswana');
        // var zulu = document.getElementById('zulu');
        user_name.value = 'Thabang';
        zulu.checked = true;
        var s = myInputs();
        assert.equal('Thabang', s.name);
        assert.equal('zulu', s.language);

    });

    it("should display greeting message, 'Sawubona, Thabang'", function() {
        displayMessage("Sawubona, Thabang")
        assert.equal("Sawubona, Thabang",greetingDisplay.innerHTML);

    });

    it("should be able to clear screen", function() {
        var user_name = document.getElementById('user_input'); //Get user input

        clearMessage()
        var language = document.querySelector("input[name='language']:checked");

        assert.equal("",greetingDisplay.innerHTML);
        assert.equal(user_name.value, '');
        assert.equal(language, null);

    });




});

describe('The resetCounter function', function() {
    it('should reset count to 0', function() {
        assert.equal(0, resetCounter());

    });
});



describe('The clickCounter function', function() {
    it('should count newly added names', function() {
        assert.equal(undefined, newlyAdded('Thabang'));

    });

    it("should add value to whenever a 'click' is heard", function() {
        assert.equal("Names greeted for this session: 1", clickCounter());

    });
});

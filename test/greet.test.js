describe('The greet function', function() {
    it('should greet Thabang correctly in English', function() {
        assert.equal("Hello, Thabang", greetFun('Thabang', 'English'));

    });

    it('should greet Gideon correctly in Setswana', function() {
        assert.equal("Dumela, Gideon", greetFun('Gideon', 'Setswana'));

    });
    it('should greet Llyod correctly in Zulu', function() {
        assert.equal("Sawubona, Llyod", greetFun('Llyod', 'Zulu'));

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

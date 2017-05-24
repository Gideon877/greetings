describe('The greet function', function(){

    it('should greet Janine correctly in three different languages', function(){
        if (english.checked) {
            assert.equal('Hello, Janine', greet('Janine'));

        } else if (zulu.checked) {
            assert.equal('Sawubona, Janine', greet('Janine'));

        } else if (setswana.checked) {
            assert.equal('Dumela, Janine', greet('Janine'));
        }
    });
  });

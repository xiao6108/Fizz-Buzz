var should = chai.should()
describe('function FizzBuzz', function(){
  it('should return Fizz if is divisible by 3', function(){
    var result = fizzBuzz(3)
    result.should.be.deep.equal('Fizz');
  });
  it('should return Buzz if is divisible by 5', function(){
    var result = fizzBuzz(5)
    result.should.be.deep.equal('Buzz');
  });
  it('should return FizzBuzz if is divisible by 3 and 5', function(){
    var result = fizzBuzz(15)
    result.should.be.deep.equal('FizzBuzz');
  });
  it('should return the number if is not divisible by 3 or 5', function(){
    var result = fizzBuzz(4)
    result.should.be.deep.equal(4);
  });
})
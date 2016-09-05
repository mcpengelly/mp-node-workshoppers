function doubleAll(numbers) {
  var result = [];
  numbers.map(function(elem){
    result.push(elem * 2);
  });
  return result;
}

module.exports = doubleAll;

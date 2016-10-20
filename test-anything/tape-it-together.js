var fancify = require(process.argv[2]);
var tape = require('tape');

tape('fancify function', function(t) {
  t.equal(fancify('steve'), '~*~steve~*~',
    'it should wrap an argument within the following: "~*~"');

  t.equal(fancify('steve', true), '~*~STEVE~*~',
    'it should uppercase the string if the 2nd argument is true');

  t.equal(fancify('steve', false, '+'), '~+~steve~+~',
    'it should replace the symbol between the TILDE characters');

  t.end();
});


var foo = require('./foo');

// zip tests
// test 1 - fail array test
a = 1;
b = [3, 7, 1, 9, 2];
c = {'a': 1};
console.log(foo.zip(a, b, c));

// test 2 - fail length test
a = ['a', 'b', 'c'];
b = [3, 7, 1, 9];
c = [{'a': 1}, {'b': 2}, {'c': 3}];
console.log(foo.zip(a, b, c));

// test 3 - pass
a = ['a', 'b', 'c', 'd', 'e'];
b = [3, 7, 1, 9, 2];
c = [{'a': 1}, {'b': 2}, {'c': 3}, {'d': 4,}, {'e': 5}];
console.log(foo.zip(a, b, c));
var foo = require('./foo');

// zip tests
// test 1 - fail array test
var a = 1;
var b = [3, 7, 1, 9, 2];
var c = {'a': 1};
console.log("a = 1");
console.log("b = [3, 7, 1, 9, 2]");
console.log("c = {'a': 1}");
console.log(foo.zip(a, b, c));
console.log("\n");

// test 2 - fail length test
a = ['a', 'b', 'c'];
b = [3, 7, 1, 9];
c = [{'a': 1}, {'b': 2}, {'c': 3}];
console.log("a = ['a', 'b', 'c']");
console.log("b = [3, 7, 1, 9]");
console.log("c = [{'a': 1}, {'b': 2}, {'c': 3}]");
console.log(foo.zip(a, b, c));
console.log("\n");

// test 3 - pass
a = ['a', 'b', 'c', 'd', 'e'];
b = [3, 7, 1, 9, 2];
c = [{'a': 1}, {'b': 2}, {'c': 3}, {'d': 4,}, {'e': 5}];
console.log("a = ['a', 'b', 'c', 'd', 'e']");
console.log("b = [3, 7, 1, 9, 2]");
console.log("c = [{'a': 1}, {'b': 2}, {'c': 3}, {'d': 4,}, {'e': 5}]");
console.log(foo.zip(a, b, c));
console.log("\n");

// isEmpty tests
console.log('Empty string tests: \n');
a = '';
b = '123!@#asd';
c = ' ';
console.log("a = ''");
console.log("b = '123!@#asd'");
console.log("c = ' '");
console.log(foo.isEmpty(a));
console.log(foo.isEmpty(b));
console.log(foo.isEmpty(c));
console.log("\n");

console.log('Empty array tests: \n');
a = [];
b = ['a', 1, 'str'];
c = [[], []];
console.log("a = []");
console.log("b = ['a', 1, 'str']");
console.log("c = [[], []]");
console.log(foo.isEmpty(a));
console.log(foo.isEmpty(b));
console.log(foo.isEmpty(c));
console.log("\n");

console.log('Empty object tests: \n');
a = {};
b = {'a': 1, 'b': 'two'};
c = {'a': 1, 
    'b': {
        'two': 2,
        'three': 3
    }, 
    'c': function() { 
        return 3; 
    }
};
console.log("a = {}");
console.log("b = {'a': 1, 'b': 'two'}");
console.log("c = {'a': 1, 'b': {'two': 2, 'three': 3}, 'c': function() { return 3; }}");
console.log(foo.isEmpty(a));
console.log(foo.isEmpty(b));
console.log(foo.isEmpty(c));
console.log("\n");

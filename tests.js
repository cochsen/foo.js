var Foo = require('./foo');

// zip tests
// test 1 - fail array test
var a = 1;
var b = [3, 7, 1, 9, 2];
var c = {'a': 1};
console.log("a = 1");
console.log("b = [3, 7, 1, 9, 2]");
console.log("c = {'a': 1}");
console.log(Foo.zip(a, b, c));
console.log("\n");

// test 2 - fail length test
a = ['a', 'b', 'c'];
b = [3, 7, 1, 9];
c = [{'a': 1}, {'b': 2}, {'c': 3}];
console.log("a = ['a', 'b', 'c']");
console.log("b = [3, 7, 1, 9]");
console.log("c = [{'a': 1}, {'b': 2}, {'c': 3}]");
console.log(Foo.zip(a, b, c));
console.log("\n");

// test 3 - pass
a = ['a', 'b', 'c', 'd', 'e'];
b = [3, 7, 1, 9, 2];
c = [{'a': 1}, {'b': 2}, {'c': 3}, {'d': 4,}, {'e': 5}];
console.log("a = ['a', 'b', 'c', 'd', 'e']");
console.log("b = [3, 7, 1, 9, 2]");
console.log("c = [{'a': 1}, {'b': 2}, {'c': 3}, {'d': 4,}, {'e': 5}]");
console.log(Foo.zip(a, b, c));
console.log("\n");

// isEmpty tests
console.log('Empty string tests: \n');
a = '';
b = '123!@#asd';
c = ' ';
console.log("a = ''");
console.log("b = '123!@#asd'");
console.log("c = ' '");
console.log(Foo.isEmpty(a));
console.log(Foo.isEmpty(b));
console.log(Foo.isEmpty(c));
console.log("\n");

console.log('Empty array tests: \n');
a = [];
b = ['a', 1, 'str'];
c = [[], []];
console.log("a = []");
console.log("b = ['a', 1, 'str']");
console.log("c = [[], []]");
console.log(Foo.isEmpty(a));
console.log(Foo.isEmpty(b));
console.log(Foo.isEmpty(c));
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
console.log(Foo.isEmpty(a));
console.log(Foo.isEmpty(b));
console.log(Foo.isEmpty(c));
console.log("\n");

// Array tests
var arr1 = [1,2,3,4];
var arr2 = [3,4,5,6];
var arr3 = [1,1,2,2,3,3,4,4];
console.log("arr1 = [1,2,3,4]");
console.log("arr2 = [3,4,5,6]");
console.log("arr3 = [1,1,2,2,3,3,4,4]");
console.log(Foo.Array.unique(arr1));
console.log(Foo.Array.unique(arr3));
console.log(Foo.Array.union(arr1, arr2));
console.log(Foo.Array.intersection(arr1, arr2));
console.log(Foo.Array.difference(arr1, arr2));
console.log(Foo.Array.difference(arr3, arr2));
console.log(Foo.Array.difference(arr2, arr3, true));
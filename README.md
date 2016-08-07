# foo.js

### Extra Javascript functions
---

A module of some extra functions that are built into other languages

Run tests with node.js
- install node.js
- copy foo.js and test.js into a directory
```
> node tests.js
```

### Functions
---

zip: zip and flatten any number of equal length arrays
```
a = ['a', 'b', 'c'];
b = [3, 7, 1];
c = [{'a': 1}, {'b': 2}, {'c': 3}];

zip(a, b, c) --> ['a', 3, {'a': 1}, 'b', 7, {'b': 2}, 'c', 1, {'c': 3}]
```
---
tuple: make an immutable array
```
var myTuple = foo.myTuple([1,2,3,4]);
myTuple.list();     // list all the items
myTuple.getAt(1);   // 2
var myOtherTuple = myTuple.copy(); // make a copy
var myArr = myTuple.toArray();  // copy to an array
```
---
iter: create an iterator
```
var myIter = foo.iter([1,2,3]);
myIter.next();  // 1
myIter.next();  // 2
myIter.next();  // 3
myIter.next();  // undefined

function square(x) {
    return x * x;
}

var sqIter = foo.iter([1,2,3], square);
sqIter.next();  // 1
sqIter.next();  // 4
sqIter.next();  // 9
sqIter.next();  // NaN
```
---
isEmpty: returns true for passed objects with no properties, empty arrays, empty strings and variables with values null or undefined. 

---
decorate: add a 'decorator' to each object in an array for the purpose of sorting, filtering, etc. The decorator is determined by another function passed in as a second argument.
```
var students = [
    {id: 0, credits: {math: 9, physics: 6, history: 7}},
    {id: 1, credits: {math: 6, physics: 7, latin: 10}},
    {id: 2, credits: {history: 8, physics: 9, chemistry: 10}},
    {id: 3, credits: {math: 5, physics: 5, geography: 7}}
];

// add a decorator to each object (example: sum of credits earned)
// which is created by this function:
function creditSum(student) {
    var arr = [];
    for (var prop in student.credits) {
        arr.push(student.credits[prop]);
    }
    var sum = arr.reduce(function(prev, curr) {
        return prev + curr;
    });
    return sum;
}

var decorated = decorate(students, creditSum);
console.log(decorated);
// [ [ 22, { id: 0, credits: [Object] } ],
//   [ 23, { id: 1, credits: [Object] } ],
//   [ 27, { id: 2, credits: [Object] } ],
//   [ 17, { id: 3, credits: [Object] } ] ]

// Sort the students by decorator
var sorted = decorated.sorted();
// [ [ 17, { id: 3, credits: [Object] } ],
//   [ 22, { id: 0, credits: [Object] } ],
//   [ 23, { id: 1, credits: [Object] } ],
//   [ 27, { id: 2, credits: [Object] } ] ]
```

undecorate: undecorate the decorated objects
```
// Undecorate the sorted objects to their original structure
var undecorated = undecorate(sorted);
console.log(undecorated);
// [ { id: 3, credits: { math: 5, physics: 5, geography: 7 } }
//   { id: 0, credits: { math: 9, physics: 6, history: 7 } },
//   { id: 1, credits: { math: 6, physics: 7, latin: 10 } },
//   { id: 2, credits: { history: 8, physics: 9, chemistry: 10 } } ]
```


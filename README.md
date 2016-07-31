# foo.js

### Extra Javascript functions
---

A module of some extra functions that are built into languages

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
console.log(decorated);
// [ { id: 3, credits: { math: 5, physics: 5, geography: 7 } }
//   { id: 0, credits: { math: 9, physics: 6, history: 7 } },
//   { id: 1, credits: { math: 6, physics: 7, latin: 10 } },
//   { id: 2, credits: { history: 8, physics: 9, chemistry: 10 } } ]
```


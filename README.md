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

zip: zip and flatten any number of equal length arrays
```
a = ['a', 'b', 'c'];
b = [3, 7, 1];
c = [{'a': 1}, {'b': 2}, {'c': 3}];

zip(a, b, c) --> ['a', 3, {'a': 1}, 'b', 7, {'b': 2}, 'c', 1, {'c': 3}]
```

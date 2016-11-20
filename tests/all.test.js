const expect = require('expect');
const Foo = require('../foo');

describe('Foo.zip', () => {
    it("arguments are not all arrays - fail", () => {
        let a = 1;
        let b = [3, 7, 1, 9, 2];
        let c = {'a': 1};
        let res = Foo.zip(a, b, c);
        expect(res).toBeA('string').toBe('All arguments must be arrays');
    });

    it("arrays are not all the same length - fail", () => {
        let a = ['a', 'b', 'c'];
        let b = [3, 7, 1, 9];
        let c = [{'a': 1}, {'b': 2}, {'c': 3}];
        let res = Foo.zip(a, b, c);
        expect(res).toBeA('string').toBe('All arrays must be equal length');
    });

    it("arrays are the same length - pass", () => {
        let a = ['a', 'b', 'c', 'd', 'e'];
        let b = [3, 7, 1, 9, 2];
        let c = [{'a': 1}, {'b': 2}, {'c': 3}, {'d': 4,}, {'e': 5}];
        let res = Foo.zip(a, b, c);
        expect(res).toBeA('array').toEqual(['a', 3, { 'a': 1 }, 'b', 7, { 'b': 2 }, 'c', 1, { 'c': 3 }, 'd', 9, { 'd': 4 }, 'e', 2, { 'e': 5 } ]);
    });
});

describe('Foo.isEmpty', () => {
    describe('String tests', () => {
        it('empty string', () => {
            let s = '';
            let res = Foo.isEmpty(s);
            expect(res).toBe(true);
        });

        it('whitespace string', () => {
            let s = ' ';
            let res = Foo.isEmpty(s);
            expect(res).toBe(false);
        });

        it('regular string', () => {
            let s = '123!@#asd';
            let res = Foo.isEmpty(s);
            expect(res).toBe(false);
        });
    });

    describe('Array tests', () => {
        it('empty array', () => {
            let a = [];
            let res = Foo.isEmpty(a);
            expect(res).toBe(true);
        });

        it('non-empty array', () => {
            let a = ['a', 1, 'str'];
            let res = Foo.isEmpty(a);
            expect(res).toBe(false);
        });

        it('arrays of empty arrays', () => {
            let a = [[], []];
            let res = Foo.isEmpty(a);
            expect(res).toBe(false);
        });
    });

    describe('Object tests', () => {
        it('empty object', () => {
            let o = {};
            let res = Foo.isEmpty(o);
            expect(res).toBe(true);    
        });

        it('no-empty object', () => {
            let o = {'a': 1, 'b': 'two'};
            let res = Foo.isEmpty(o);
            expect(res).toBe(false);   
        });

        it('object with object, function', () => {
            let o = {'a': 1, 
            'b': {
                    'two': 2,
                    'three': 3
                }, 
                'c': function() { 
                    return 3; 
                }
            };
            let res = Foo.isEmpty(o);
            expect(res).toBe(false);   
        });
    });
});







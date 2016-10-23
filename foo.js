module.exports = {

    zip: function() {
        var args = [].slice.call(arguments);
        var failed = false;
        var len, zip;

        args.some(function(arg) {
            if (arg.constructor !== Array) {
                failed = true;
                return;
            }       
        });

        if (failed) return 'All arguments must be arrays';

        args.some(function(arg) {
            if (arg.length !== args[0].length) {
                failed = true;
                return arg.length !== args[0].length;
            }       
        });

        if (failed) return 'All arrays must be equal length';

        len = args[0].length;
        zip = [];

        for (i = 0; i < len; i++) {
            arr = [];
            for (j = 0; j < args.length; j++) {
                zip.push(args[j][i]);;
            }
        }

        return zip;
    },

    decorate: function(objArr, fn) {
        return objArr.map(function(obj) {
            return [fn(obj), obj];
        });
    },

    undecorate: function(arr) {
        var undecorated = [];
        arr.forEach(function(subarr) {
            undecorated.push(subarr[1]);
        });

        return undecorated;
    },

    tuple: function(arr) {
        var t = (function(arr) {
            var t = [];
            arr.forEach(function(item) {
                t.push(item);
            });
            
            tuple = {
                list: function() {
                    t.forEach(function(item) {
                        console.log(item);
                    });
                },
                getAt: function(i) {
                    return t[i];
                },
                copy: function() {
                    return this;
                },
                toArray: function() {
                    return t;
                }
            };

            return tuple;
        })(arr);
        return t;
    },

    iter: function(arr, fn) {
        var i = (function(arr, fn) {
            var i;

            var iter = {
                data: arr,
                iter: function() {
                    return this;
                },
                next: function() {
                    var result;
                    if (!fn) {
                        result = this.data[0];
                    } else {
                        result = fn(this.data[0]);
                    }
                    this.data.shift();
                    return result;
                },
                getData: function() {
                    return this.data;
                }
            }; 
            return iter;
        })(arr, fn); 
        return i;
    },

    isEmpty: function(thing) {
        if (typeof(thing) === 'object') {
            var prop;
            var props = [];
            for (prop in thing) {
                props.push(thing);
            }
            return props.length === 0;
        } 
        
        if (thing.constructor === Array) {
            return thing.length === 0;
        }

        return (thing === null) || (thing === '') || (thing === undefined);
    }, 

    isArray: function(thing) {
        return thing.constructor === Array;
    },

    isObject: function(thing) {
        return typeof(thing) === 'object';
    },

    Array: {
        unique: function(arr) {
            var newArr = [];
            for (var i = 0; i < arr.length; i++) {
                var found = false;
                for (var j = 0; j < newArr.length; j++) {
                    if (arr[i] === newArr[j]) {
                        found = true;
                        continue;
                    }
                }
                if (!found) {
                    newArr.push(arr[i]);
                }
            }

            return newArr;
        },

        union: function(arr1, arr2) {
            return this.unique(
                arr1.concat(arr2)
            );
        },

        intersection: function(arr1, arr2) {
            var intersectionArr = [];
            var uArr1 = this.unique(arr1);
            var uArr2 = this.unique(arr2);

            for (var i = 0; i < uArr1.length; i++) {
                for (var j = 0; j < uArr2.length; j++) {
                    if (uArr1[i] === uArr2[j]) {
                        intersectionArr.push(uArr1[i]);
                    }
                }
            }
            return this.unique(intersectionArr);
        },

        difference: function(arr1, arr2, uniq) {
            var diff = [];
            var inter = this.intersection(arr1, arr2);

            for (var i = 0; i < arr1.length; i++) {
                var found = false;
                for (var j = 0; j < inter.length; j++) {
                    if (arr1[i] === inter[j]) {
                        found = true;
                    }
                }
                if (!found) {
                    diff.push(arr1[i]);
                }
            }

            if (uniq) {
                return this.unique(diff); 
            } else {
                return diff;
            }
        }
    }
};


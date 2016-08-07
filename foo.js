module.exports = {

    zip: function() {
        var args = [].slice.call(arguments);
        var failed = false;
        var len, zip;

        args.some(function(arg) {
            if (arg.constructor !== Array) {
                failed = true;
                return arg.constructor !== Array;
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

    iter: function(arr) {
        var i = (function(arr) {
            var indexes = [];
            var i;

            var iter = {
                data: arr,
                indexes: null,
                iter: function() {
                    return this;
                },
                next: function() {
                    return this.data.shift();
                },
                updateIndexes: function() {
                    var i;
                    for (i = 0; i < this.data.length; i++) {
                        this.indexes.push(i);
                    }
                },
                getIndexes: function() {
                    var i;
                    this.indexes = [];
                    for (i=0; i<this.data.length; i++) {
                        this.indexes.push(i);
                    }
                    return this.indexes;
                }
            }; 
            return iter;
        })(arr); 
        return i;
    }  
};


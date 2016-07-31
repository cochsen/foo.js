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
    }
};


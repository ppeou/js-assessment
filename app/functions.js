exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn(...arr);
  },

  speak: function(fn, obj) {
    return fn.bind(obj)();
  },

  functionFunction: function(str) {
    return (str2) => `${str}, ${str2}`;
  },

  makeClosures: function(arr, fn) {
    return arr.map(i => (() => fn(i)));
  },

  partial: function(fn, str1, str2) {
    return (str3) => fn(str1, str2, str3);
  },

  useArguments: function() {
    const argSize = arguments.length;
    let total = 0;
    for(i = 0; i < argSize; i++) {
      total += arguments[i];
    }
    return total;
  },

  callIt: function(fn) {
    const [firstArg, ...args] = arguments;
    return fn(...args);
  },

  partialUsingArguments: function(fn) {
    const [firstArg, ...args1] = arguments;
    return function () {
      const [...args2] = arguments;
      return fn(...args1, ...args2);
    }
  },

  curryIt: function(fn) {
    return a => b => c => fn(a,b,c);
  }
};

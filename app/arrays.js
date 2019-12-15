exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function (arr, item) {
    return arr.indexOf(item);
  },

  sum: function (arr) {
    return arr.reduce((total, number) => total + number, 0);
  },

  remove: function (arr, item) {
    return arr.filter(n => n !== item);
  },

  removeWithoutCopy: function (arr, item) {
    const indexes = arr.reduce((p, n, i) => {
      if (n === item) {p.push(i);}
      return p;
    }, []).sort((a, b) => b - a);

    indexes.forEach(i => arr.splice(i, 1));

    return arr;
  },

  append: function (arr, item) {
    return [...arr, item];
  },

  truncate: function (arr) {
    return (([...rest]) => {rest.pop(); return rest;})(arr)
  },

  prepend: function (arr, item) {
    return [item, ...arr];
  },

  curtail: function (arr) {
    const [first, ...rest] = arr;

    return rest;
  },

  concat: function (arr1, arr2) {
    return [...arr1, ...arr2];
  },

  insert: function (arr, item, index) {
    return [
      ...arr.slice(0, index),
      item,
      ...arr.slice(index)
    ];
  },

  count: function (arr, item) {
    return arr.reduce((p, n, i) => {
      if(n === item) {p.push(i);}
      return p;
    }, []).length;
  },

  duplicates: function (arr) {
    const tracker = {};
    return arr.filter(n => {
      tracker[n] = (tracker[n] || 0) + 1;
      return tracker[n] === 2;
    });
  },

  square: function (arr) {
    return arr.map(n => n * n);
  },

  findAllOccurrences: function (arr, target) {
    return arr.reduce((p, n, i) => {
      if(n === target) {
        p.push(i);
      }
      return p;
    }, [])
  }
};

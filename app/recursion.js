exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function (data, dirName) {
    const finder = (list, parentName, mapper) => {
      if (!mapper) {mapper = {};}
      const {dir, files} = list;
      const key = `${parentName || ''}/${dir}`;
      if (!mapper[key]) { mapper[key] = [];}
      files.forEach(f => {
        if (f.constructor === String) {
          mapper[key].push(f);
        } else {
          finder(f, key, mapper);
        }
      });

      return mapper;
    };

    const mapper = finder(data);

    let list, arrayKeys;
    if(dirName) {
      const _dirname = `/${dirName}`;
      arrayKeys = Object.keys(mapper).filter(key => key.indexOf(_dirname) > -1);
    } else {
      arrayKeys = Object.keys(mapper);
    }

    list = arrayKeys.reduce((p, key) => {
      return [...p, ...mapper[key]];
    }, []);

    return list;
  },

  permute: function (arr) {
  },

  fibonacci: function (n) {
    let pos = n;
    let prev, next, val;
    const arr = [1, 1];

    if(n <= arr.length) {
      return arr[n - 1];
    } else {
      let a, b;
      for(let i = arr.length; i < n; i++) {
        a = arr[i - 2];
        b = arr[i - 1];
        arr.push(a + b);
      }
    }

    return arr.pop();
  },

  validParentheses: function (n) {

  }
};

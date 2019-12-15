exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    let prevCh;
    let tracker = {};

    const result = str.split('').reduce((p, c, i) => {
      tracker[c] = (tracker[c] || 0) + 1;
      prevCh = str[i -1];
      if(c !== prevCh) {
        delete tracker[prevCh];
      }
      if(tracker[c] <= amount) {
        p.push(c);
      }
      return p;
    }, []);
    return result.join('');
  },

  wordWrap: function(str, cols) {
    let count = 0;
    const result = str.split(' ').reduce((p,c) => {
      if(c.length >= cols)  { p.push(c); p.push('\n'); count  = 0;}
      else {
        count += c.length;
        if (count === cols) {
          p.push(c);
          p.push('\n');
          count = 0;
        } else if (count < cols) {
          p.push(c);
          p.push(' ');
        } else if (count > cols) {
          p[p.length - 1] = '\n';
          p.push(c);
          p.push(' ');
          count = c.length;
        }
      }
      return p;
    }, []);
    if(result[result.length -1] === ' ') {result.pop();}
    return result.join('');
  },

  reverseString: function(str) {
    const s = [];
    for(let i = str.length - 1; i >=0; i--) {
      s.push(str[i]);
    }
    return s.join('');
  }
};

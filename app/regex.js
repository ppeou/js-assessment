exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function(str) {
    return Boolean((str.match(/\d+/) || [])[0]);
  },

  containsRepeatingLetter: function(str) {
    return Boolean((str.match(/([a-zA-Z]+)(?=\1)/g) || [])[0]);
  },

  endsWithVowel: function(str) {
    return Boolean((str.match(/[aeiou]$/gi) || [])[0]);
  },

  captureThreeNumbers: function(str) {
    const num = (str.match(/\d{3}/) || []) [0];
    return num && num.length > 0 ? num : false;
  },

  matchesPattern: function(str) {
    return Boolean((str.match(/^\d{3}-\d{3}-\d{4}$/) || [])[0]);
  },

  isUSD: function(str) {
    let [a, b] = str.match(/\d*\.?/g).join('').split('.');
    if(!b) {
      plain = a;
    } else {
      b = b.substr(0,2);
      plain = `${a}.${b + '00'.substr(b.length)}`;
    }
    const formatted = `$${plain.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}`;
    return formatted === str;
  }
};

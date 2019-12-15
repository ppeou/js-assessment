exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    const zeroFillMap = {
      8: '00000000',
      16: '0000000000000000'
    };
    const str = num.toString(2);
    const zeroFill = zeroFillMap[str.length < 8 ? 8 : 16]
    const binaryStr = zeroFill.substr(str.length) + str;

    return Number(binaryStr[bit]);
  },

  base10: function(str) {
    return parseInt(str, 2);
  },

  convertToBinary: function(num) {
    const str = num.toString(2);
    return '00000000'.substr(str.length) + str;
  },

  multiply: function(a, b) {
    const precisionCounts = [a, b].map(n => n.toString().split('.'[1] || '').length);
    const maxPrecision = Math.max(...precisionCounts);
    const factor = maxPrecision > 0 ? Math.pow(10, maxPrecision) : 1;
    const [n1, n2] = ([a, b].map(n => n * factor));

    return (n1 * n2) / (factor * factor);
  }
};

exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
    const period = 100;
    let iid;
    const cancel = () => {clearInterval(iid);}
    console.log(start);
    start++;
    iid = setInterval(() => {
      console.log(start);
      if(start >= end) {
        clearInterval(iid);
      } else {
        start++;
      }
    }, period);

    return {cancel};
  }
};

exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    return new Promise(resolve => {
      resolve(value);
    });
  },

  manipulateRemoteData: function(url) {
    return new Promise(resolve => {
      fetch(url).then(r => {
        r.json().then(({people}) => {
          const items = people.map(({name}) => name);
          items.sort((a,b) => a < b ? -1 : 1);
          resolve(items);
        });
      });
    });
  }
};

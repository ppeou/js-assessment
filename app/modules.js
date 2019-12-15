exports = typeof window === 'undefined' ? global : window;

exports.modulesAnswers = {
  createModule: function(str1, str2) {
    return (() => {
      const instant = {
        greeting: str1,
        name: str2,
        sayIt: () => `${instant.greeting}, ${instant.name}`
      };
      return instant;
    })();
  }
};

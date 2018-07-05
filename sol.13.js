module.exports = function compose(...fns) {
  const fs = fns.reverse();

  return function(initialValue) {
    return fs.reduce((value, fn) => fn(value), initialValue);
  };
};

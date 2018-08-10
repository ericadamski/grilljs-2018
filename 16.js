function pipe(...fns) {
  return function(initialValue) {
    return fns.reduce((value, fn) => fn(value), initialValue);
  };
}

function split(str) {
  return str.split("");
}

function capitalize(arr) {
  arr[0] = arr[0].toUpperCase();

  return arr;
}

function joinWithExclamations(arr) {
  return arr.join("!") + "!";
}

console.log(
  pipe(
    split,
    capitalize,
    joinWithExclamations
  )("hello griljs")
);

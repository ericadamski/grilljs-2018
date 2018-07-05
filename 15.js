// pure
function addOne(value) {
  return value + 1;
}

// Not pure
function addOneOrTwo(value) {
  return value + (Math.round(Math.random() * 100) % 3 ? 1 : 2);
}

console.clear();

// This would always be 2!
console.log(addOne(1), addOne(1), addOne(1), addOne(1));

// This won't always be 2!
console.log(addOneOrTwo(1), addOneOrTwo(1), addOneOrTwo(1), addOneOrTwo(1));

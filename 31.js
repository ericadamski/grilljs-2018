const { of } = require("rxjs");
const { map, filter, reduce } = require("rxjs/operators");

const list = [1, 2, 3, 4];

console.log(
  list
    .map(i => i + 1)
    .filter(i => i % 2)
    .reduce((sum, v) => sum + v, 0)
);

console.log("===");

of(1, 2, 3, 4)
  .pipe(
    map(i => i + 1),
    filter(i => i % 2),
    reduce((sum, v) => sum + v, 0)
  )
  .subscribe({
    next(v) {
      console.log(v);
    }
  });

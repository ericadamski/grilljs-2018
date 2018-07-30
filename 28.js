const { of, interval } = require("rxjs");

const list = [1, 2, 3, 4];

// Observable
const observable = of(1, 2, 3, 4);

console.log(list.map(i => i + 1).join("\n"));

console.log("===");

observable.subscribe({
  next(i) {
    console.log(i + 1);
  }
});

console.log("===");
console.log("🔥 interval");

interval(1000).subscribe({
  next(s) {
    console.log(`${s + 1} seconds have passed.`);
  }
});

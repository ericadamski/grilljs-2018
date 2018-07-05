const { range, interval } = require("rxjs");
const { map, concatMap } = require("rxjs/operators");

function makeRandomPromise(v) {
  function randomInteger(m) {
    return Math.round(Math.random() * m);
  }

  return function() {
    return new Promise(resolve => {
      const interval = Math.max(500, randomInteger(5000));
      console.log(`Waiting ${interval} for ${v}`);
      setTimeout(() => resolve(v), interval);
    });
  };
}

range(1, 10)
  .pipe(
    map(value => makeRandomPromise(value)),
    concatMap(fn => fn())
  )
  .subscribe({
    next(v) {
      console.log("Got", v);
    }
  });

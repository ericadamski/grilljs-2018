const { of, empty } = require("rxjs");

// empty
[];
empty();

// null or undefined
[null] /* or */ [undefined];
of(null) /* or */ of(undefined);

// primatives-ish
[1, 'string', [], {}]
of(1, 'string', [], {})

const db = require("./src/db.js");

// Image we have some data like so:
console.clear();
db.User.findOne()
  .then(user => console.log(JSON.stringify(user.toJSON(), null, 2)))
  .then(() => db.close());

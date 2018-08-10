const db = require("./src/db.js");
const { decode } = require("./src/sanitize.js");
const getLocation = require("./src/get-location.js");

function pipe(...fns) {
  return function(initialValue) {
    return fns.reduce((value, fn) => fn(value), initialValue);
  };
}

const prepareUser = pipe(
  decodeAllStrings,
  computePopularity,
  attachLocation
);

class UserController {
  // Typical ExpressJS route handler
  static index(request) {
    // Fetch the data from the database ...
    console.time("index");
    return db.User.find().then(users => {
      users.forEach(prepareUser);

      return users;
    });
  }
}

// pure function!
function decodeAllStrings(user) {
  const userJson = user.toJSON();

  Object.keys(userJson).forEach(key => {
    let value = userJson[key];

    if (typeof value === "string") user.set(key, decode(value));
  });

  return user;
}

// pure function!
function computePopularity(user) {
  user.set(
    "obscure_popularity",
    user.get("repo_count") / user.get("star_count")
  );

  return user;
}

// pure ... 🤔
function attachLocation(user) {
  return getLocation(user.location_id).then(location =>
    user.set("location", location)
  );
}

UserController.index()
  .then(u => {
    console.timeEnd("index");

    return u;
  })
  .then(console.log)
  .then(() => db.close());

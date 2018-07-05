const { from } = require("rxjs");
const { switchAll, toArray } = require("rxjs/operators");
const db = require("./src/db.js");
const { decode } = require("./src/sanitize.js");
const getLocation = require("./src/get-location.js");

class UserController {
  // Typical ExpressJS route handler
  static index(request) {
    console.time("index");
    return from(db.User.find()).pipe(
      // switchAll(),
      decodeAllStrings(),
      computePopularity(),
      attachLocation()
      // toArray()
    );
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

function attachLocation(user) {
  return getLocation(user.location_id).then(location =>
    user.set("location", location)
  );
}

UserController.index().subscribe({
  next(users) {
    console.log(users);
  },
  complete() {
    console.timeEnd("index");
    db.close();
  }
});

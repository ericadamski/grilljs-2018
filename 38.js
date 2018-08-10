const { from } = require("rxjs");
const { map, concatMap, switchAll, toArray } = require("rxjs/operators");
const db = require("./src/db.js");
const { decode } = require("./src/sanitize.js");
const getLocation = require("./src/get-location.js");

class UserController {
  static index(request) {
    console.time("index");
    return from(db.User.find()).pipe(
      switchAll(),
      decodeAllStrings(),
      computePopularity(),
      attachLocation(),
      toArray()
    );
  }
}

// pure function!
function decodeAllStrings() {
  return source$ =>
    source$.pipe(
      map(user => {
        const userJson = user.toJSON();

        Object.keys(userJson).forEach(key => {
          let value = userJson[key];

          if (typeof value === "string") user.set(key, decode(value));
        });

        return user;
      })
    );
}

// pure function!
function computePopularity() {
  return source$ =>
    source$.pipe(
      map(user => {
        user.set(
          "obscure_popularity",
          user.get("repo_count") / user.get("star_count")
        );

        return user;
      })
    );
}

function attachLocation() {
  return source$ =>
    source$.pipe(
      concatMap(user => {
        return getLocation(user.location_id).then(
          location => (user.set("location", location), user)
        );
      })
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

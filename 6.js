const db = require("./src/db.js");
const { decode } = require("./src/sanitize.js");
const getLocation = require("./src/get-location.js");

class UserController {
  // Typical ExpressJS route handler
  static index(request) {
    // Fetch the data from the database ...
    console.time("index");
    return db.User.find().then(users => {
      users.forEach(user => {
        const userJson = user.toJSON();

        // sanitize all strings
        Object.keys(userJson).forEach(key => {
          let value = userJson[key];

          if (typeof value === "string") user.set(key, decode(value));
        });

        // compute some aggregrate data
        user.set(
          "obscure_popularity",
          user.get("repo_count") / user.get("star_count")
        );

        // populate location
        getLocation(user.location_id).then(location =>
          user.set("location", location)
        );
      });

      return users;
    });
  }
}

UserController.index()
  .then(u => {
    console.timeEnd("index");

    return u;
  })
  .then(console.log)
  .then(() => db.close());

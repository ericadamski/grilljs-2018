const { Location } = require("./db.js");

module.exports = function getLocation(id) {
  return Location.findById(id).then(l => l.toJSON());
};

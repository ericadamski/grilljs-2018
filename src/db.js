const Mongoose = require("mongoose");

const { Schema } = Mongoose;

const locationSchema = new Schema(
  {
    lat: Number,
    long: Number,
    country: String,
    city: String
  },
  { strict: false }
);

const userSchema = new Schema(
  {
    name: String,
    login: String,
    avatar_url: String,
    location_id: Mongoose.SchemaTypes.ObjectId,
    url: String,
    repo_count: { type: Number, default: 0 },
    star_count: { type: Number, default: 0 }
  },
  { strict: false }
);

const User = Mongoose.model("user", userSchema);
const Location = Mongoose.model("location", locationSchema);

Mongoose.connect("mongodb://localhost:27017/grill")
  .then(m => (db = m))
  .catch(console.error);

Location.find().then(locations => {
  locations.length < 1 &&
    Location.insertMany([
      {
        lat: 45.27,
        long: -75.42,
        country: "Canada",
        city: "Ottawa"
      },
      {
        lat: 52.13,
        long: 21.0,
        country: "Poland",
        city: "Warsaw"
      },
      {
        lat: 52.3,
        long: 13.25,
        country: "Germany",
        city: "Berlin"
      }
    ]);
});

User.find().then(async users => {
  return (
    users.length < 1 &&
    User.insertMany([
      {
        name: "45726963204164616d736b69",
        login: "657269636164616d736b69",
        avatar_url:
          "68747470733a2f2f61766174617273302e67697468756275736572636f6e74656e742e636f6d2f752f363531363735383f763d34",
        location_id: (await Location.findOne({ city: "Ottawa" }))._id,
        url:
          "68747470733a2f2f6170692e6769746875622e636f6d2f75736572732f657269636164616d736b69",
        repo_count: 72,
        star_count: 225
      }
    ])
  );
});

module.exports = {
  User,
  Location,
  close() {
    setImmediate(() => Mongoose.connection.close());
  }
};

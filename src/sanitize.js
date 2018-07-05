module.exports.encode = function encode(value) {
  return encodeURIComponent(Buffer.from(value).toString("hex"));
};

module.exports.decode = function decode(value) {
  return decodeURIComponent(Buffer.from(value, "hex").toString("utf8"));
};

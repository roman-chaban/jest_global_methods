const bestLaCroixFlavor = (flavor) => {
  return flavor;
};

function value(callback, ...items) {
  let result = items;

  return callback(result);
}

module.exports = { bestLaCroixFlavor, value };

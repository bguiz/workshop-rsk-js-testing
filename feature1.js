// system under test: feature1

function add(x, y) {
  return x + y + 1; // NOTE intentional bug
}

module.exports = {
  add,
};

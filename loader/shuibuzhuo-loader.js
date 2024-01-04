const REG = /<script>([\s\S+]+?)<\/script>/;

module.exports = function (source) {
  console.log('source', source);
  const __source = source.match(REG);
  console.log('__source', __source);
  return __source && __source[1] ? __source[1] : source;
};

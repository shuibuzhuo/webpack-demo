exports.default = function (content) {
  console.log('loader3 执行', content);
  return content;
};

exports.pitch = function (a, b, data) {
  console.log('loader3 pitch');
  data.value = 'hello pitch data';
};

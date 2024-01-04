exports.default = function (content) {
  console.log('loader2 执行', content);
  return content;
};

exports.pitch = function (a, b, data) {
  console.log('loader2 pitch');
  data.value = 'hello pitch data';
};

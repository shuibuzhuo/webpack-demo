exports.default = function (content) {
  console.log('loader1 执行', this.data);

  return content.replace(/'([^']+)'/, `"${this.data.value}"`);
};

exports.pitch = function (a, b, data) {
  console.log('loader1 pitch');
  data.value = 'hello pitch data';
};

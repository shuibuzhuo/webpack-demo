exports.default = function (content) {
  const { resourcePath = '', resourceQuery = ''} = this
  console.log('loader2 执行');
  console.log('loader2 resourcePath', resourcePath);
  console.log('loader2 resourceQuery', resourceQuery);

  return content;
};

exports.pitch = function (a, b, data) {
  console.log('loader2 pitch');
  data.value = 'hello pitch data';
};
